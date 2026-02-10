import mongoose from 'mongoose';

const waitlistUserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    college: { type: String, required: true, trim: true },
    year: { type: String, required: true, enum: ['1st Year', '2nd Year', '3rd Year', '4th Year'] },
    branch: { type: String, required: true, trim: true },

    // Survey Questions
    q1_social_feed: { type: Boolean, required: true },
    q2_assignment_marketplace: { type: Boolean, required: true },
    q3_snacks_printouts: { type: Boolean, required: true },
    q4_society_updates: { type: Boolean, required: true },
    q5_campus_marketplace: { type: Boolean, required: true },
    q6_beta_interest: { type: Boolean, required: true },
    q7_mobile_preference: { type: Boolean, required: true },

    source: { type: String, default: 'landing_page' },
    created_at: { type: Date, default: Date.now },
});

waitlistUserSchema.index({ created_at: -1 });

// Prevent model recompilation in serverless (hot module caching)
export default mongoose.models.WaitlistUser || mongoose.model('WaitlistUser', waitlistUserSchema);
