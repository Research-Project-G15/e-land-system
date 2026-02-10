const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const fixExternalUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eland');
        console.log('Connected to MongoDB');

        // Define complete user data
        const userUpdates = {
            'notary1': {
                fullName: 'Jane Smith',
                password: 'notary123',
                gender: 'female',
                province: 'Central',
                district: 'Kandy',
                profession: 'notary'
            },
            'dilshi126': {
                fullName: 'Dilshi Piyumika',
                password: 'lawyer123',
                gender: 'female',
                province: 'Western',
                district: 'Colombo',
                profession: 'lawyer'
            },
            'dasunwije': {
                fullName: 'Dasun Wijesinghe',
                password: 'notary123',
                gender: 'male',
                province: 'Southern',
                district: 'Galle',
                profession: 'notary'
            }
        };

        console.log('\n=== 🔄 Fixing External User Data ===');

        for (const [username, userData] of Object.entries(userUpdates)) {
            const user = await User.findOne({ username, userType: 'external' });
            
            if (user) {
                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(userData.password, salt);
                
                // Update all fields
                user.fullName = userData.fullName;
                user.passwordHash = passwordHash;
                user.gender = userData.gender;
                user.province = userData.province;
                user.district = userData.district;
                user.profession = userData.profession;
                user.role = userData.profession;
                user.registrationStatus = 'approved';
                user.approvedBy = 'system';
                user.approvedAt = new Date();
                
                await user.save();
                
                console.log(`✅ Fixed: ${username} (${userData.fullName}) - ${userData.profession}`);
            } else {
                console.log(`❌ User ${username} not found`);
            }
        }

        console.log('\n=== 🎯 WORKING LOGIN CREDENTIALS ===');
        console.log('Use these at: http://localhost:8080/external-login\n');

        const externalUsers = await User.find({ userType: 'external' })
            .select('username fullName profession registrationStatus');

        for (const user of externalUsers) {
            const userData = userUpdates[user.username];
            if (userData) {
                console.log(`👤 ${user.fullName}`);
                console.log(`   Username: ${user.username}`);
                console.log(`   Password: ${userData.password}`);
                console.log(`   Profession: ${user.profession}`);
                console.log(`   Status: ${user.registrationStatus}`);
                console.log('');
            }
        }

        console.log('=== ✅ All external users are now ready for login! ===');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

fixExternalUsers();