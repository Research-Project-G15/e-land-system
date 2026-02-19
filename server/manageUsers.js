const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const manageUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eland');
        console.log('🔗 Connected to MongoDB: eland-registry database');
        console.log('📍 Location: mongodb://localhost:27017/eland-registry');

        console.log('\n=== 👥 ALL USERS IN DATABASE ===');
        const allUsers = await User.find({}).select('username role userType profession registrationStatus');
        
        console.log('\n🔐 ADMIN USERS:');
        allUsers.filter(u => u.userType === 'internal').forEach(user => {
            console.log(`  • ${user.username} (${user.role})`);
        });

        console.log('\n👨‍💼 EXTERNAL USERS:');
        allUsers.filter(u => u.userType === 'external').forEach(user => {
            const status = user.registrationStatus || 'approved';
            console.log(`  • ${user.username} (${user.profession}) - ${status}`);
        });

        console.log('\n=== 🎯 QUICK ACTIONS ===');
        console.log('To create a new admin user, run: node createAdmin.js');
        console.log('To check users anytime, run: node manageUsers.js');
        
        console.log('\n=== 🌐 ACCESS YOUR APPLICATION ===');
        console.log('Admin Login: http://localhost:8080/admin/login');
        console.log('External Login: http://localhost:8080/external-login');
        console.log('External Register: http://localhost:8080/external-register');

        console.log('\n=== 📊 DATABASE STATS ===');
        console.log(`Total Users: ${allUsers.length}`);
        console.log(`Admin Users: ${allUsers.filter(u => u.userType === 'internal').length}`);
        console.log(`External Users: ${allUsers.filter(u => u.userType === 'external').length}`);
        console.log(`Pending Approvals: ${allUsers.filter(u => u.registrationStatus === 'pending').length}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

manageUsers();