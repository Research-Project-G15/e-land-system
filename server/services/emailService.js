const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create transporter with flexible configuration
const createTransporter = () => {
    const emailConfig = {
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com',
            pass: process.env.EMAIL_PASS || 'your-app-password'
        }
    };

    // If custom SMTP settings are provided
    if (process.env.EMAIL_HOST) {
        emailConfig.host = process.env.EMAIL_HOST;
        emailConfig.port = parseInt(process.env.EMAIL_PORT) || 587;
        emailConfig.secure = process.env.EMAIL_SECURE === 'true';
        delete emailConfig.service; // Remove service when using custom SMTP
    }

    return nodemailer.createTransport(emailConfig);
};

// Generate OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate verification token
const generateVerificationToken = () => {
    return crypto.randomBytes(32).toString('hex');
};

// Send OTP email
const sendOTPEmail = async (email, otp, fullName) => {
    try {
        // Check if email configuration is set up
        // FORCE MOCK FOR TESTING to avoid hanging
        if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your-email@gmail.com') {
            console.warn('Email service not configured. OTP would be sent to:', email);
            console.log(`OTP for ${fullName}: ${otp}`);
            return true; // Return true for development/testing
        }

        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@eland-system.lk',
            to: email,
            subject: 'E-Land System - Email Verification Required',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                        <img src="${process.env.FRONTEND_URL || 'http://localhost:8080'}/logo.png" alt="E-Land System Logo" style="height: 60px; width: auto; margin-bottom: 15px;" />
                        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">E-Land Registry System</h1>
                        <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 16px;">Sri Lanka Land Registry</p>
                    </div>
                    
                    <!-- Content -->
                    <div style="padding: 40px 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                        <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Email Verification Required</h2>
                        
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">Dear ${fullName},</p>
                        
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                            Thank you for registering with the E-Land Registry System. To complete your registration, 
                            please verify your email address using the verification code below:
                        </p>
                        
                        <!-- OTP Box -->
                        <div style="background: #f8fafc; border: 2px solid #3b82f6; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px; font-weight: 500;">VERIFICATION CODE</p>
                            <div style="font-size: 36px; font-weight: 700; color: #1e40af; letter-spacing: 8px; font-family: 'Courier New', monospace; margin: 10px 0;">${otp}</div>
                            <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 14px;">This code will expire in 10 minutes</p>
                        </div>
                        
                        <!-- Important Notice -->
                        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 25px 0; border-radius: 0 6px 6px 0;">
                            <p style="color: #92400e; margin: 0; font-size: 14px; font-weight: 500;">
                                <strong>Important:</strong> After email verification, your account will be reviewed by our administrators for approval.
                            </p>
                        </div>
                        
                        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 25px 0 0 0;">
                            If you did not request this registration, please ignore this email. This verification code will expire automatically.
                        </p>
                        
                        <!-- Footer -->
                        <div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 25px;">
                            <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0; text-align: center;">
                                This is an automated message from E-Land Registry System.<br>
                                Please do not reply to this email.<br>
                                <strong>Ministry of Land and Land Development, Sri Lanka</strong>
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log(`OTP email sent to ${email}`);
        return true;
    } catch (error) {
        console.error('Error sending OTP email:', error);
        // For development, still return true and log the OTP
        if (process.env.NODE_ENV === 'development') {
            console.log(`Development mode - OTP for ${fullName}: ${otp}`);
            return true;
        }
        return false;
    }
};

// Send welcome email after admin approval
const sendWelcomeEmail = async (email, fullName, username, profession) => {
    try {
        // Check if email configuration is set up
        if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your-email@gmail.com') {
            console.warn('Email service not configured. Welcome email would be sent to:', email);
            console.log(`Welcome email for ${fullName} (${username}) - ${profession}`);
            return true; // Return true for development/testing
        }

        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@eland-system.lk',
            to: email,
            subject: 'Welcome to E-Land Registry System - Account Approved',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                        <img src="${process.env.FRONTEND_URL || 'http://localhost:8080'}/logo.png" alt="E-Land System Logo" style="height: 60px; width: auto; margin-bottom: 15px;" />
                        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">E-Land Registry System</h1>
                        <p style="color: #d1fae5; margin: 8px 0 0 0; font-size: 16px;">Sri Lanka Land Registry</p>
                    </div>
                    
                    <!-- Content -->
                    <div style="padding: 40px 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                        <h2 style="color: #059669; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Account Approved</h2>
                        
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">Dear ${fullName},</p>
                        
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                            Congratulations! Your registration as a <strong>${profession}</strong> has been approved by our administrators. 
                            You now have access to the E-Land Registry System.
                        </p>
                        
                        <!-- Account Details Box -->
                        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 25px; margin: 30px 0;">
                            <h3 style="color: #166534; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Account Details</h3>
                            <div style="color: #374151; font-size: 14px; line-height: 1.6;">
                                <p style="margin: 8px 0;"><strong>Username:</strong> ${username}</p>
                                <p style="margin: 8px 0;"><strong>Profession:</strong> ${profession}</p>
                                <p style="margin: 8px 0;"><strong>Access Level:</strong> Read-only access to land records</p>
                            </div>
                        </div>
                        
                        <!-- Login Button -->
                        <div style="text-align: center; margin: 35px 0;">
                            <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/external-login" 
                               style="background: #059669; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px;">
                                Access Your Account
                            </a>
                        </div>
                        
                        <!-- Features Box -->
                        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 25px; margin: 30px 0;">
                            <h4 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Available Services</h4>
                            <ul style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                                <li style="margin: 8px 0;">Search and view land records</li>
                                <li style="margin: 8px 0;">Verify property ownership details</li>
                                <li style="margin: 8px 0;">Access deed information for legal purposes</li>
                                <li style="margin: 8px 0;">Download verification reports</li>
                            </ul>
                        </div>
                        
                        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 25px 0 0 0;">
                            If you have any questions or need assistance, please contact our support team.
                        </p>
                        
                        <!-- Footer -->
                        <div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 25px;">
                            <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0; text-align: center;">
                                This is an automated message from E-Land Registry System.<br>
                                Please do not reply to this email.<br>
                                <strong>Ministry of Land and Land Development, Sri Lanka</strong>
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${email}`);
        return true;
    } catch (error) {
        console.error('Error sending welcome email:', error);
        // For development, still return true and log the action
        if (process.env.NODE_ENV === 'development') {
            console.log(`Development mode - Welcome email for ${fullName} (${username}) - ${profession}`);
            return true;
        }
        return false;
    }
};

module.exports = {
    generateOTP,
    generateVerificationToken,
    sendOTPEmail,
    sendWelcomeEmail
};