const mongoose = require('mongoose');

const waitlistUserSchema = new mongoose.Schema({
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
    biggest_challenge: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Select at least one challenge'
        }
    },
    preferred_features: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Select at least one feature'
        }
    },
    current_solution: {
        type: String,
        required: true,
        enum: [
            'WhatsApp groups',
            'Seniors / friends',
            'Google / YouTube',
            'Multiple apps',
            "I don't have a good solution"
        ]
    },
    beta_interest: {
        type: String,
        required: true,
        enum: ['Yes', 'Maybe', 'No']
    },
    primary_device: {
        type: String,
        required: true,
        enum: ['Android', 'iOS', 'Laptop / Web']
    },
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
