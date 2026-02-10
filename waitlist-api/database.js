const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        console.error('⚠️  Server will continue running, but database operations will fail.');
        console.error('💡 Please whitelist your IP in MongoDB Atlas Network Access settings.');
        // Don't exit - let server run so users get proper error messages
        return null;
    }
};

module.exports = connectDB;
