import connectDB from './_lib/database.js';
import WaitlistUser from './_lib/WaitlistUser.js';

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        await connectDB();

        const { name, email, college, year, branch,
            q1_social_feed, q2_assignment_marketplace, q3_snacks_printouts,
            q4_society_updates, q5_campus_marketplace, q6_beta_interest, q7_mobile_preference
        } = req.body;

        // Validation
        const errors = [];
        if (!name || !name.trim()) errors.push('Name is required');
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
        if (!college || !college.trim()) errors.push('College is required');
        if (!['1st Year', '2nd Year', '3rd Year', '4th Year'].includes(year)) errors.push('Valid year is required');
        if (!branch || !branch.trim()) errors.push('Branch is required');
        if (typeof q1_social_feed !== 'boolean') errors.push('Q1 answer is required');
        if (typeof q2_assignment_marketplace !== 'boolean') errors.push('Q2 answer is required');
        if (typeof q3_snacks_printouts !== 'boolean') errors.push('Q3 answer is required');
        if (typeof q4_society_updates !== 'boolean') errors.push('Q4 answer is required');
        if (typeof q5_campus_marketplace !== 'boolean') errors.push('Q5 answer is required');
        if (typeof q6_beta_interest !== 'boolean') errors.push('Q6 answer is required');
        if (typeof q7_mobile_preference !== 'boolean') errors.push('Q7 answer is required');

        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        // Check duplicate
        const existing = await WaitlistUser.findOne({ email: email.toLowerCase().trim() });
        if (existing) {
            return res.status(409).json({ success: false, message: 'This email is already on the waitlist!' });
        }

        // Create entry
        await WaitlistUser.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            college: college.trim(),
            year,
            branch: branch.trim(),
            q1_social_feed, q2_assignment_marketplace, q3_snacks_printouts,
            q4_society_updates, q5_campus_marketplace, q6_beta_interest, q7_mobile_preference,
            source: 'landing_page',
        });

        return res.status(201).json({ success: true, message: "You're on the waitlist! 🎉" });
    } catch (error) {
        console.error('Waitlist submission error:', error);

        if (error.message?.includes('MONGODB_URI')) {
            return res.status(503).json({ success: false, message: 'Database not configured.' });
        }
        if (error.name === 'MongooseError' || error.message?.includes('buffering timed out')) {
            return res.status(503).json({ success: false, message: 'Database is currently unavailable.' });
        }

        return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
    }
}
