require('dotenv').config();
const emailService = require('./services/emailService');

const testService = async () => {
    console.log('🧪 Testing emailService module...');
    const email = process.env.EMAIL_USER;
    if (!email) {
        console.error('❌ EMAIL_USER not set in .env');
        return;
    }

    console.log(`Target: ${email}`);

    try {
        console.log('Sending OTP email...');
        const result = await emailService.sendOTPEmail(email, '123456', 'Test User');
        if (result) console.log('✅ sendOTPEmail returned true');
        else console.log('❌ sendOTPEmail returned false');
    } catch (err) {
        console.error('❌ sendOTPEmail threw error:', err);
    }
};

testService();
