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

// In-memory storage fallback (for when MongoDB is unavailable)
const inMemoryStorage = [];
let isMongoDBConnected = false;

// Check MongoDB connection status
const mongoose = require('mongoose');
mongoose.connection.on('connected', () => {
    isMongoDBConnected = true;
    console.log('✅ MongoDB is connected - using database storage');
});
mongoose.connection.on('disconnected', () => {
    isMongoDBConnected = false;
    console.log('⚠️  MongoDB disconnected - using in-memory storage');
});
mongoose.connection.on('error', () => {
    isMongoDBConnected = false;
    console.log('⚠️  MongoDB error - using in-memory storage');
});

// ==================== API ROUTES ====================

// POST /api/waitlist - Submit waitlist entry
app.post('/api/waitlist', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('college').trim().notEmpty().withMessage('College is required'),
    body('year').isIn(['1st Year', '2nd Year', '3rd Year', '4th Year']).withMessage('Valid year is required'),
    body('branch').trim().notEmpty().withMessage('Branch is required'),
    body('q1_social_feed').isBoolean().withMessage('Q1: Social feed answer is required'),
    body('q2_assignment_marketplace').isBoolean().withMessage('Q2: Assignment marketplace answer is required'),
    body('q3_snacks_printouts').isBoolean().withMessage('Q3: Snacks and printouts answer is required'),
    body('q4_society_updates').isBoolean().withMessage('Q4: Society updates answer is required'),
    body('q5_campus_marketplace').isBoolean().withMessage('Q5: Campus marketplace answer is required'),
    body('q6_beta_interest').isBoolean().withMessage('Q6: Beta interest answer is required'),
    body('q7_mobile_preference').isBoolean().withMessage('Q7: Mobile preference answer is required')
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

        const {
            name, email, college, year, branch,
            q1_social_feed, q2_assignment_marketplace, q3_snacks_printouts,
            q4_society_updates, q5_campus_marketplace, q6_beta_interest, q7_mobile_preference
        } = req.body;

        // Use in-memory storage if MongoDB is not connected
        if (!isMongoDBConnected) {
            // Check for duplicate email in memory
            const existingUser = inMemoryStorage.find(user => user.email === email);
            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: 'This email is already on the waitlist!'
                });
            }

            // Add to in-memory storage
            const newEntry = {
                name, email, college, year, branch,
                q1_social_feed, q2_assignment_marketplace, q3_snacks_printouts,
                q4_society_updates, q5_campus_marketplace, q6_beta_interest, q7_mobile_preference,
                source: 'landing_page',
                created_at: new Date()
            };
            inMemoryStorage.push(newEntry);

            console.log(`✅ Saved to in-memory storage (${inMemoryStorage.length} total entries)`);
            console.log('⚠️  Note: Data will be lost when server restarts. Please connect MongoDB for persistent storage.');

            return res.status(201).json({
                success: true,
                message: "You're on the waitlist! 🎉 (Saved temporarily - MongoDB not connected)"
            });
        }

        // Use MongoDB if connected
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
            q1_social_feed,
            q2_assignment_marketplace,
            q3_snacks_printouts,
            q4_society_updates,
            q5_campus_marketplace,
            q6_beta_interest,
            q7_mobile_preference,
            source: 'landing_page'
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "You're on the waitlist! 🎉"
        });
    } catch (error) {
        console.error('Waitlist submission error:', error);

        // Check if it's a MongoDB connection error
        if (error.name === 'MongooseError' || error.message.includes('buffering timed out')) {
            return res.status(503).json({
                success: false,
                message: 'Database is currently unavailable. Please ask the admin to whitelist the IP address in MongoDB Atlas.'
            });
        }

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

        // Survey Question Analytics - Count "Yes" responses
        const surveyResults = await WaitlistUser.aggregate([
            {
                $group: {
                    _id: null,
                    q1_yes: { $sum: { $cond: ['$q1_social_feed', 1, 0] } },
                    q2_yes: { $sum: { $cond: ['$q2_assignment_marketplace', 1, 0] } },
                    q3_yes: { $sum: { $cond: ['$q3_snacks_printouts', 1, 0] } },
                    q4_yes: { $sum: { $cond: ['$q4_society_updates', 1, 0] } },
                    q5_yes: { $sum: { $cond: ['$q5_campus_marketplace', 1, 0] } },
                    q6_yes: { $sum: { $cond: ['$q6_beta_interest', 1, 0] } },
                    q7_yes: { $sum: { $cond: ['$q7_mobile_preference', 1, 0] } }
                }
            }
        ]);

        const counts = surveyResults[0] || {
            q1_yes: 0, q2_yes: 0, q3_yes: 0, q4_yes: 0,
            q5_yes: 0, q6_yes: 0, q7_yes: 0
        };

        // Calculate percentages
        const calculatePercentage = (yesCount) => totalSignups > 0 ? Math.round((yesCount / totalSignups) * 100) : 0;

        const surveyPercentages = {
            q1_social_feed: { yes: counts.q1_yes, percentage: calculatePercentage(counts.q1_yes) },
            q2_assignment_marketplace: { yes: counts.q2_yes, percentage: calculatePercentage(counts.q2_yes) },
            q3_snacks_printouts: { yes: counts.q3_yes, percentage: calculatePercentage(counts.q3_yes) },
            q4_society_updates: { yes: counts.q4_yes, percentage: calculatePercentage(counts.q4_yes) },
            q5_campus_marketplace: { yes: counts.q5_yes, percentage: calculatePercentage(counts.q5_yes) },
            q6_beta_interest: { yes: counts.q6_yes, percentage: calculatePercentage(counts.q6_yes) },
            q7_mobile_preference: { yes: counts.q7_yes, percentage: calculatePercentage(counts.q7_yes) }
        };

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

        // Top Colleges
        const topColleges = await WaitlistUser.aggregate([
            { $group: { _id: '$college', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        res.json({
            success: true,
            data: {
                overview: {
                    totalSignups,
                    todaySignups,
                    weekSignups,
                    betaInterestPercentage: surveyPercentages.q6_beta_interest.percentage
                },
                survey: surveyPercentages,
                charts: {
                    signupsByYear,
                    signupsByBranch,
                    topColleges
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

        const [entries, total] = await Promise.all([
            WaitlistUser.find(filter)
                .select('name email college year branch q1_social_feed q2_assignment_marketplace q3_snacks_printouts q4_society_updates q5_campus_marketplace q6_beta_interest q7_mobile_preference created_at')
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

// ==================== PROTECTED ADMIN ROUTES ====================

// Middleware to verify admin access
const verifyAdminAccess = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const adminPassword = process.env.ADMIN_PASSWORD || 'collegepaglu2026';

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Missing authentication token'
        });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    if (token !== adminPassword) {
        return res.status(403).json({
            success: false,
            message: 'Forbidden: Invalid credentials'
        });
    }

    next();
};

// GET /form/response/admin - Protected admin endpoint to fetch all responses
app.get('/form/response/admin', verifyAdminAccess, async (req, res) => {
    try {
        let responses;
        let totalCount;

        // Use in-memory storage if MongoDB is not connected
        if (!isMongoDBConnected) {
            responses = inMemoryStorage.map((entry, index) => ({
                id: index + 1,
                ...entry,
                submittedAt: entry.created_at
            }));
            totalCount = inMemoryStorage.length;
        } else {
            // Fetch from MongoDB
            responses = await WaitlistUser.find()
                .select('-__v')
                .sort({ created_at: -1 })
                .lean();
            totalCount = await WaitlistUser.countDocuments();
        }

        // Calculate survey statistics
        const surveyStats = {
            q1_social_feed: { yes: 0, no: 0 },
            q2_assignment_marketplace: { yes: 0, no: 0 },
            q3_snacks_printouts: { yes: 0, no: 0 },
            q4_society_updates: { yes: 0, no: 0 },
            q5_campus_marketplace: { yes: 0, no: 0 },
            q6_beta_interest: { yes: 0, no: 0 },
            q7_mobile_preference: { yes: 0, no: 0 }
        };

        responses.forEach(response => {
            Object.keys(surveyStats).forEach(key => {
                if (response[key]) {
                    surveyStats[key].yes++;
                } else {
                    surveyStats[key].no++;
                }
            });
        });

        // Group by college
        const collegeBreakdown = {};
        responses.forEach(response => {
            if (!collegeBreakdown[response.college]) {
                collegeBreakdown[response.college] = 0;
            }
            collegeBreakdown[response.college]++;
        });

        // Group by year
        const yearBreakdown = {};
        responses.forEach(response => {
            if (!yearBreakdown[response.year]) {
                yearBreakdown[response.year] = 0;
            }
            yearBreakdown[response.year]++;
        });

        res.json({
            success: true,
            data: {
                totalResponses: totalCount,
                storageType: isMongoDBConnected ? 'MongoDB' : 'In-Memory (Temporary)',
                responses: responses,
                analytics: {
                    surveyStats,
                    collegeBreakdown: Object.entries(collegeBreakdown)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 10)
                        .map(([college, count]) => ({ college, count })),
                    yearBreakdown: Object.entries(yearBreakdown)
                        .map(([year, count]) => ({ year, count }))
                }
            }
        });
    } catch (error) {
        console.error('Admin fetch error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch responses'
        });
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
