const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const BASE_URL = 'http://localhost:5000/api/auth';
let adminToken;

// Login as Super Admin
const loginAdmin = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/login`, {
            username: 'admin', // Assumption: 'admin' is a superadmin or has access
            password: 'password123'
        });
        adminToken = res.data.token;
        console.log('✅ Admin logged in');
        return res.data.user;
    } catch (err) {
        console.error('❌ Admin login failed:', err.response?.data || err.message);
        process.exit(1);
    }
};

const testSeparation = async () => {
    console.log('🚀 Starting User Separation Test...');

    await loginAdmin();

    // 1. Test GET /users (Should ONLY return internal users)
    console.log('\n1. Testing GET /users (Internal Admin Management)...');
    try {
        const res = await axios.get(`${BASE_URL}/users`, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        const users = res.data;
        console.log(`   Fetched ${users.length} users.`);

        const externalUsers = users.filter(u => u.userType === 'external');
        if (externalUsers.length === 0) {
            console.log('✅ Success: No external users found in /users endpoint.');
        } else {
            console.error('❌ Failure: Found external users in /users endpoint:', externalUsers.map(u => u.username));
        }

        const internalUsers = users.filter(u => u.userType === 'internal' || !u.userType);
        if (internalUsers.length > 0) {
            console.log('✅ Success: Internal users found.');
        } else {
            console.warn('⚠️ Warning: No internal users found (besides superadmin possibly filtered out or no other admins).');
        }

    } catch (err) {
        console.error('❌ Failed to fetch /users:', err.response?.data || err.message);
    }

    // 2. Test GET /active-external-users (Should ONLY return external users)
    console.log('\n2. Testing GET /active-external-users (External User Management)...');
    try {
        const res = await axios.get(`${BASE_URL}/active-external-users`, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        const externalUsers = res.data;
        console.log(`   Fetched ${externalUsers.length} active external users.`);

        const internalUsers = externalUsers.filter(u => u.userType === 'internal');
        if (internalUsers.length === 0) {
            console.log('✅ Success: No internal users found in /active-external-users endpoint.');
        } else {
            console.error('❌ Failure: Found internal users in /active-external-users endpoint:', internalUsers.map(u => u.username));
        }

        if (externalUsers.length > 0) {
            console.log('✅ Success: External users found.');
        } else {
            console.warn('⚠️ Warning: No external users found. Run testExternalFlow.js first to create one.');
        }

    } catch (err) {
        console.error('❌ Failed to fetch /active-external-users:', err.response?.data || err.message);
    }
};

testSeparation();
