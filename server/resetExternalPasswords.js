const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const resetExternalPasswords = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eland');
        console.log('Connected to MongoDB');

        // Define password mappings
        const passwordMappings = {
            'notary1': 'notary123',
            'dilshi126': 'lawyer123',
            'dasunwije': 'notary123'
        };

        console.log('\n=== 🔄 Resetting External User Passwords ===');

        for (const [username, newPassword] of Object.entries(passwordMappings)) {
            const user = await User.findOne({ username, userType: 'external' });
            
            if (user) {
                // Hash the new password
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(newPassword, salt);
                
                // Update user
                user.passwordHash = passwordHash;
                await user.save();
                
                console.log(`✅ ${username} (${user.profession}) - Password reset to: ${newPassword}`);
            } else {
                console.log(`❌ User ${username} not found`);
            }
        }

        console.log('\n=== 🎯 UPDATED LOGIN CREDENTIALS ===');
        console.log('Use these at: http://localhost:8080/external-login\n');

        const externalUsers = await User.find({ userType: 'external' })
            .select('username fullName profession registrationStatus');

        for (const user of externalUsers) {
            const password = passwordMappings[user.username] || 'unknown';
            console.log(`👤 ${user.fullName || user.username}`);
            console.log(`   Username: ${user.username}`);
            console.log(`   Password: ${password}`);
            console.log(`   Profession: ${user.profession}`);
            console.log(`   Status: ${user.registrationStatus}`);
            console.log('');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

resetExternalPasswords();