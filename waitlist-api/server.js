require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { body, query, validationResult } = require('express-validator');
const connectDB = require('./database');
const WaitlistUser = require('./models/WaitlistUser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://www.collegepaglu.com', 'https://collegepaglu.com'],
    credentials: true
}));
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
connectDB();

// ==================== API ROUTES ====================

// POST /api/waitlist - Submit waitlist entry
app.post('/api/waitlist', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('college').trim().notEmpty().withMessage('College is required'),
    body('year').isIn(['1st Year', '2nd Year', '3rd Year', '4th Year']).withMessage('Valid year is required'),
    body('branch').trim().notEmpty().withMessage('Branch is required'),
    body('biggest_challenge').isArray({ min: 1 }).withMessage('Select at least one challenge'),
    body('preferred_features').isArray({ min: 1 }).withMessage('Select at least one feature'),
    body('current_solution').notEmpty().withMessage('Current solution is required'),
    body('beta_interest').isIn(['Yes', 'Maybe', 'No']).withMessage('Beta interest is required'),
    body('primary_device').isIn(['Android', 'iOS', 'Laptop / Web']).withMessage('Device is required')
], async (req, res) => {
    try {
        // Validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(e => e.msg)
            });
        }

        const { name, email, college, year, branch, biggest_challenge, preferred_features, current_solution, beta_interest, primary_device } = req.body;

        // Check for duplicate email
        const existingUser = await WaitlistUser.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'This email is already on the waitlist!'
            });
        }

        // Create new waitlist entry
        const newUser = new WaitlistUser({
            name,
            email,
            college,
            year,
            branch,
            biggest_challenge,
            preferred_features,
            current_solution,
            beta_interest,
            primary_device,
            source: 'landing_page'
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "You're on the waitlist! 🎉"
        });
    } catch (error) {
        console.error('Waitlist submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again.'
        });
    }
});

// GET /api/waitlist/analytics - Get analytics data
app.get('/api/waitlist/analytics', async (req, res) => {
    try {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekStart = new Date(todayStart);
        weekStart.setDate(weekStart.getDate() - 7);

        // Total signups
        const totalSignups = await WaitlistUser.countDocuments();

        // Today's signups
        const todaySignups = await WaitlistUser.countDocuments({ created_at: { $gte: todayStart } });

        // This week's signups
        const weekSignups = await WaitlistUser.countDocuments({ created_at: { $gte: weekStart } });

        // Beta interest breakdown
        const betaInterest = await WaitlistUser.aggregate([
            { $group: { _id: '$beta_interest', count: { $sum: 1 } } }
        ]);
        const yesCount = betaInterest.find(b => b._id === 'Yes')?.count || 0;
        const betaPercentage = totalSignups > 0 ? Math.round((yesCount / totalSignups) * 100) : 0;

        // Signups by Year
        const signupsByYear = await WaitlistUser.aggregate([
            { $group: { _id: '$year', count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);

        // Signups by Branch
        const signupsByBranch = await WaitlistUser.aggregate([
            { $group: { _id: '$branch', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        // Feature demand
        const featureDemand = await WaitlistUser.aggregate([
            { $unwind: '$preferred_features' },
            { $group: { _id: '$preferred_features', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        // Biggest challenges
        const challenges = await WaitlistUser.aggregate([
            { $unwind: '$biggest_challenge' },
            { $group: { _id: '$biggest_challenge', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        // Device breakdown
        const devices = await WaitlistUser.aggregate([
            { $group: { _id: '$primary_device', count: { $sum: 1 } } }
        ]);

        // Current solutions
        const solutions = await WaitlistUser.aggregate([
            { $group: { _id: '$current_solution', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        res.json({
            success: true,
            data: {
                overview: {
                    totalSignups,
                    todaySignups,
                    weekSignups,
                    betaPercentage
                },
                charts: {
                    signupsByYear,
                    signupsByBranch,
                    featureDemand,
                    challenges,
                    devices,
                    solutions
                }
            }
        });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch analytics' });
    }
});

// GET /api/waitlist/entries - Get entries with filters
app.get('/api/waitlist/entries', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 100 })
], async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        // Build filter
        const filter = {};
        if (req.query.college) filter.college = new RegExp(req.query.college, 'i');
        if (req.query.year) filter.year = req.query.year;
        if (req.query.branch) filter.branch = new RegExp(req.query.branch, 'i');
        if (req.query.beta_interest) filter.beta_interest = req.query.beta_interest;

        const [entries, total] = await Promise.all([
            WaitlistUser.find(filter)
                .select('name email college year branch beta_interest created_at')
                .sort({ created_at: -1 })
                .skip(skip)
                .limit(limit),
            WaitlistUser.countDocuments(filter)
        ]);

        res.json({
            success: true,
            data: {
                entries,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error('Entries fetch error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch entries' });
    }
});

// Serve admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Waitlist API running on http://localhost:${PORT}`);
    console.log(`📊 Admin dashboard: http://localhost:${PORT}/admin`);
});
