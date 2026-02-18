import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function start() {
    const app = express();
    app.use(express.json());

    // ── API routes ──
    // const { default: waitlistHandler } = await import('./api/waitlist.js');
    const { default: responsesHandler } = await import('./api/responses.js');
    const { default: authHandler } = await import('./api/auth.js');
    const { default: trackVisitHandler } = await import('./api/track-visit.js');

    // app.post('/api/waitlist', waitlistHandler);
    app.get('/api/responses', responsesHandler);
    app.post('/api/auth', authHandler);
    app.get('/api/track-visit', trackVisitHandler);
    app.post('/api/track-visit', trackVisitHandler);

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
        console.log(`  📊  http://localhost:${PORT}/response/form/analysis`);
        console.log();
    });
}

start().catch((err) => {
    console.error('Failed to start dev server:', err);
    process.exit(1);
});
