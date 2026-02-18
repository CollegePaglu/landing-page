import express from 'express';
const app = express();
const PORT = 5173;
app.get('/', (req, res) => res.send('Hello'));
app.listen(PORT, () => console.log(`Test server running on ${PORT}`));
