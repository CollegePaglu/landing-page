import connectDB from './_lib/database.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    const validUser = process.env.ADMIN_USERNAME || 'CollegePaglu';
    const validPass = process.env.ADMIN_PASSWORD || 'terimaakabhosda';

    if (username === validUser && password === validPass) {
        return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
}
