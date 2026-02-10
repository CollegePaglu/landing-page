import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function start() {
    const app = express();
    app.use(express.json());

    // ── API routes ──
    const { default: waitlistHandler } = await import('./api/waitlist.js');
    app.post('/api/waitlist', waitlistHandler);

    // ── Vite dev middleware (serves the React frontend) ──
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
    });
    app.use(vite.middlewares);

    const PORT = process.env.PORT || 5173;
    app.listen(PORT, () => {
        console.log();
        console.log(`  🚀  http://localhost:${PORT}`);
        console.log(`  Frontend + API on one port`);
        console.log();
    });
}

start().catch((err) => {
    console.error('Failed to start dev server:', err);
    process.exit(1);
});
