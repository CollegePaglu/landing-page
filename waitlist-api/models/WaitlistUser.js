const mongoose = require('mongoose');

const waitlistUserSchema = new mongoose.Schema({
    // Basic Information
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    college: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        enum: ['1st Year', '2nd Year', '3rd Year', '4th Year']
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },

    // Survey Questions (Yes/No)
    q1_social_feed: {
        type: Boolean,
        required: true
    },
    q2_assignment_marketplace: {
        type: Boolean,
        required: true
    },
    q3_snacks_printouts: {
        type: Boolean,
        required: true
    },
    q4_society_updates: {
        type: Boolean,
        required: true
    },
    q5_campus_marketplace: {
        type: Boolean,
        required: true
    },
    q6_beta_interest: {
        type: Boolean,
        required: true
    },
    q7_mobile_preference: {
        type: Boolean,
        required: true
    },

    // Metadata
    source: {
        type: String,
        default: 'landing_page'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Index for faster queries
waitlistUserSchema.index({ created_at: -1 });
waitlistUserSchema.index({ college: 1 });
waitlistUserSchema.index({ year: 1 });
waitlistUserSchema.index({ branch: 1 });

module.exports = mongoose.model('WaitlistUser', waitlistUserSchema);
