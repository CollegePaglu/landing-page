import mongoose from 'mongoose';

const siteStatsSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 },
});

export default mongoose.models.SiteStats || mongoose.model('SiteStats', siteStatsSchema);
