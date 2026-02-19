const mongoose = require('mongoose');

const externalUserSchema = new mongoose.Schema({
    // Account details
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['lawyer', 'notary'],
        required: true,
    },
    userType: {
        type: String,
        default: 'external',
        immutable: true
    },
    profession: {
        type: String,
        enum: ['lawyer', 'notary'],
        required: true,
    },

    // Personal details
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\+94[0-9]{9}$/, 'Please enter a valid Sri Lankan phone number (+94xxxxxxxxx)']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },

    // Email verification
    emailVerified: {
        type: Boolean,
        default: false
    },
    emailVerificationToken: {
        type: String
    },
    emailVerificationExpires: {
        type: Date
    },

    // Registration meta
    registrationStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'revoked'],
        default: 'pending'
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },

    // Approval/Rejection details
    approvedBy: {
        type: String
    },
    approvedAt: {
        type: Date
    },
    rejectionReason: {
        type: String
    },

    // Activity Tracking (Optional but good to have)
    lastLogin: {
        type: Date
    }
});

module.exports = mongoose.model('ExternalUser', externalUserSchema);