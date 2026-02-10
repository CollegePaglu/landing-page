import mongoose from 'mongoose';

// Cache the connection across serverless invocations / dev server restarts
let cachedConn = null;

export default async function connectDB() {
    if (cachedConn && cachedConn.readyState === 1) {
        return cachedConn;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI environment variable is not set');
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
    });

    cachedConn = conn.connection;
    return cachedConn;
}
