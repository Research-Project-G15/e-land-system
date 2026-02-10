const mongoose = require('mongoose');

const externalUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        enum: ['lawyer', 'notary'],
        required: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLogin: {
        type: Date,
    },
}, {
    collection: 'externalusers' // Explicitly specify the collection name
});

module.exports = mongoose.model('ExternalUser', externalUserSchema);