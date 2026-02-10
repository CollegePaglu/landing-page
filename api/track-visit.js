import connectDB from './_lib/database.js';
import SiteStats from './_lib/SiteStats.js';

export default async function handler(req, res) {
    // POST = record a visit, GET = fetch count
    try {
        await connectDB();

        if (req.method === 'POST') {
            const result = await SiteStats.findOneAndUpdate(
                { key: 'total_visits' },
                { $inc: { value: 1 } },
                { upsert: true, new: true }
            );
            return res.status(200).json({ success: true, count: result.value });
        }

        if (req.method === 'GET') {
            const doc = await SiteStats.findOne({ key: 'total_visits' }).lean();
            return res.status(200).json({ success: true, count: doc?.value || 0 });
        }

        return res.status(405).json({ success: false, message: 'Method not allowed' });
    } catch (error) {
        console.error('Visit tracking error:', error);
        return res.status(500).json({ success: false, count: 0 });
    }
}
