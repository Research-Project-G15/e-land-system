const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const getExternalCredentials = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eland');
        console.log('Connected to MongoDB');

        // Get all external users
        const externalUsers = await User.find({ userType: 'external' })
            .select('username fullName profession registrationStatus');

        console.log('\n=== 🔑 EXTERNAL USER LOGIN CREDENTIALS ===');
        console.log('Use these credentials at: http://localhost:8080/external-login\n');

        for (const user of externalUsers) {
            console.log(`👤 ${user.fullName || 'Unknown Name'}`);
            console.log(`   Username: ${user.username}`);
            console.log(`   Profession: ${user.profession}`);
            console.log(`   Status: ${user.registrationStatus}`);
            
            // Try common passwords
            const commonPasswords = ['lawyer123', 'notary123', 'password123', 'admin123'];
            let foundPassword = null;
            
            for (const testPassword of commonPasswords) {
                try {
                    const isMatch = await bcrypt.compare(testPassword, user.passwordHash);
                    if (isMatch) {
                        foundPassword = testPassword;
                        break;
                    }
                } catch (err) {
                    // Continue to next password
                }
            }
            
            if (foundPassword) {
                console.log(`   Password: ${foundPassword} ✅`);
            } else {
                console.log(`   Password: [Check with admin] ❓`);
            }
            console.log('');
        }

        console.log('=== 📝 NOTES ===');
        console.log('- Only approved users can login');
        console.log('- External users have read-only access to land records');
        console.log('- If password is unknown, admin can reset it');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

getExternalCredentials();