import connectDB from './_lib/database.js';
import WaitlistUser from './_lib/WaitlistUser.js';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        await connectDB();

        // Fetch all responses
        const responses = await WaitlistUser.find()
            .select('-__v')
            .sort({ created_at: -1 })
            .lean();

        const totalCount = responses.length;

        // Time-based stats
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekStart = new Date(todayStart);
        weekStart.setDate(weekStart.getDate() - 7);

        const todayCount = responses.filter(r => new Date(r.created_at) >= todayStart).length;
        const weekCount = responses.filter(r => new Date(r.created_at) >= weekStart).length;

        // Survey stats
        const surveyKeys = [
            { key: 'q1_social_feed', label: 'Social Feed' },
            { key: 'q2_assignment_marketplace', label: 'Assignment Marketplace' },
            { key: 'q3_snacks_printouts', label: 'Snacks & Printouts' },
            { key: 'q4_society_updates', label: 'Society Updates' },
            { key: 'q5_campus_marketplace', label: 'Campus Marketplace' },
            { key: 'q6_beta_interest', label: 'Beta Interest' },
            { key: 'q7_mobile_preference', label: 'Mobile Preference' },
        ];

        const survey = surveyKeys.map(({ key, label }) => {
            const yesCount = responses.filter(r => r[key] === true).length;
            return {
                key,
                label,
                yes: yesCount,
                no: totalCount - yesCount,
                percentage: totalCount > 0 ? Math.round((yesCount / totalCount) * 100) : 0,
            };
        });

        // College breakdown
        const collegeMap = {};
        responses.forEach(r => {
            collegeMap[r.college] = (collegeMap[r.college] || 0) + 1;
        });
        const colleges = Object.entries(collegeMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15)
            .map(([name, count]) => ({ name, count }));

        // Year breakdown
        const yearMap = {};
        responses.forEach(r => {
            yearMap[r.year] = (yearMap[r.year] || 0) + 1;
        });
        const years = Object.entries(yearMap)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([name, count]) => ({ name, count }));

        // Branch breakdown
        const branchMap = {};
        responses.forEach(r => {
            branchMap[r.branch] = (branchMap[r.branch] || 0) + 1;
        });
        const branches = Object.entries(branchMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));

        return res.status(200).json({
            success: true,
            data: {
                overview: { total: totalCount, today: todayCount, week: weekCount },
                survey,
                colleges,
                years,
                branches,
                responses: responses.map(r => ({
                    _id: r._id,
                    name: r.name,
                    email: r.email,
                    college: r.college,
                    year: r.year,
                    branch: r.branch,
                    betaInterest: r.q6_beta_interest,
                    createdAt: r.created_at,
                })),
            },
        });
    } catch (error) {
        console.error('Responses fetch error:', error);
        return res.status(500).json({ success: false, message: 'Failed to fetch responses' });
    }
}
