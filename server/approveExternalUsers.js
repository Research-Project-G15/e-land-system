const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const approveAllExternalUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eland');
        console.log('Connected to MongoDB');

        // Find all pending external users
        const pendingUsers = await User.find({ 
            userType: 'external', 
            registrationStatus: 'pending' 
        });

        console.log(`\n=== Found ${pendingUsers.length} pending external users ===`);

        for (const user of pendingUsers) {
            user.registrationStatus = 'approved';
            user.approvedBy = 'system';
            user.approvedAt = new Date();
            await user.save();
            
            console.log(`✅ Approved: ${user.username} (${user.profession}) - ${user.fullName}`);
        }

        console.log('\n=== All external users approved! ===');
        console.log('They can now login at: http://localhost:8080/external-login');

        // Show current external users
        const allExternalUsers = await User.find({ userType: 'external' })
            .select('username profession fullName registrationStatus');
        
        console.log('\n=== Current External Users ===');
        allExternalUsers.forEach(user => {
            console.log(`- ${user.username} (${user.profession}) - ${user.registrationStatus}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

approveAllExternalUsers();