import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsletterRouter from './routes/newsletter.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[API] ${req.method} ${req.path}`);
    next();
});

app.use('/api/newsletter', newsletterRouter);
app.get('/api', (req, res) => res.json({ message: 'API Server is up and running!' }));

export default app;