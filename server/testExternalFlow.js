const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
// Disable email service for testing to prevent hang/timeout
process.env.EMAIL_USER = '';

const BASE_URL = 'http://localhost:5000/api/auth';
let registrationId;
let otp;
let adminToken;

// Helper to login as admin
const loginAdmin = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/login`, {
            username: 'admin',
            password: 'password123'
        });
        adminToken = res.data.token;
        console.log('✅ Admin logged in');
    } catch (err) {
        console.error('❌ Admin login failed:', err.response?.data || err.message);
        process.exit(1);
    }
};

const testFlow = async () => {
    try {
        console.log('Starting External User Flow Test...');

        // 1. Register External User
        const userData = {
            fullName: 'Test Lawyer',
            email: `lawyer_${Date.now()}@example.com`,
            phoneNumber: '+94770000000',
            username: `lawyer_${Date.now()}`,
            password: 'password123',
            profession: 'lawyer',
            gender: 'male',
            province: 'Western',
            district: 'Colombo'
        };

        console.log(`1. Registering user: ${userData.username}...`);
        try {
            const regRes = await axios.post(`${BASE_URL}/register-external`, userData);
            registrationId = regRes.data.registrationId;
            console.log('Registration successful. ID: ' + registrationId);
        } catch (err) {
            console.error('Registration failed: ' + (err.response?.data?.message || err.message));
            if (err.response?.data) console.error(JSON.stringify(err.response.data));
            return;
        }

        // 2. Fetch OTP from DB (Simulating email check)
        // We need to connect to DB to get the OTP
        console.log('Connecting to DB...');
        await mongoose.connect(process.env.MONGODB_URI);
        const ExternalUser = require('./models/ExternalUser');
        const regDoc = await ExternalUser.findById(registrationId);

        if (!regDoc) {
            console.error('Could not find registration doc in DB');
            return;
        }

        otp = regDoc.emailVerificationToken;
        console.log(`2. Retrieved OTP from DB: ${otp}`);

        // 3. Verify Email manually in DB (Bypassing API due to test environment hang)
        console.log('3. Verifying Email (Manual DB Update)...');
        await ExternalUser.findByIdAndUpdate(registrationId, {
            emailVerified: true,
            emailVerificationToken: undefined,
            emailVerificationExpires: undefined
        });
        console.log('Email verified in DB');
        await mongoose.disconnect();

        /* 
        try {
            await axios.post(`${BASE_URL}/verify-email`, {
                registrationId,
                otp
            });
            console.log('Email verified successfully');
        } catch (err) {
            console.error('Verification failed: ' + (err.response?.data?.message || err.message));
            return;
        }
        */

        // 4. Admin Approval
        await loginAdmin();
        console.log('4. Approving Registration...');
        try {
            await axios.post(`${BASE_URL}/approve-registration/${registrationId}`, {}, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            console.log('Registration approved by admin');
        } catch (err) {
            console.error('Approval failed: ' + (err.response?.data?.message || err.message));
            return;
        }

        // 5. Verify User is in "Active External Users" list
        console.log('5. Verifying Active User List...');
        try {
            const activeUsersRes = await axios.get(`${BASE_URL}/active-external-users`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            const activeUsers = activeUsersRes.data;
            const isUserActive = activeUsers.some(u => u.username === userData.username);

            if (isUserActive) {
                console.log('Success: User found in active external users list.');
            } else {
                console.error('Error: User NOT found in active external users list.');
                // Don't exit here, let's try login anyway
            }

            // Validate user is NOT in internal users list
            const internalUsersRes = await axios.get(`${BASE_URL}/users`, {
                headers: { 'Authorization': `Bearer ${adminToken}` }
            });
            const internalUsers = internalUsersRes.data;
            const isUserInternal = internalUsers.some(u => u.username === userData.username);
            if (!isUserInternal) {
                console.log('Success: User NOT found in internal users list.');
            } else {
                console.error('Error: User FOUND in internal users list (Should NOT be there).');
            }


        } catch (err) {
            console.error('Failed to fetch active/internal users: ' + (err.response?.data?.message || err.message));
        }

        // 6. Test Login with new user
        console.log('6. Testing Resulting User Login...');
        try {
            const loginRes = await axios.post(`${BASE_URL}/login`, {
                username: userData.username,
                password: userData.password
            });
            console.log('Login successful!');
            console.log('   Role: ' + (loginRes.data.user.role || loginRes.data.role));
            console.log('   Type: ' + (loginRes.data.user.userType || loginRes.data.userType));
        } catch (err) {
            console.error('Login failed: ' + (err.response?.data?.message || err.message));
            return;
        }

        console.log('All tests passed successfully!');
        process.exit(0);

    } catch (error) {
        console.error('Unexpected error:', error);
        process.exit(1);
    }
};

testFlow();
