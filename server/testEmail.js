require('dotenv').config();
const nodemailer = require('nodemailer');

const testEmail = async () => {
    console.log('📧 Testing Email Service...');
    console.log(`User: ${process.env.EMAIL_USER}`);
    console.log(`Pass: ${process.env.EMAIL_PASS ? '********' : 'NOT SET'}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        logger: true, // Log to console
        debug: true   // Include SMTP traffic in logs
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self
        subject: 'E-Land System Test Email',
        text: 'This is a test email to verify the email service configuration.'
    };

    try {
        console.log('Sending email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('❌ Email sending failed:');
        console.error(error);
    }
};

testEmail();
