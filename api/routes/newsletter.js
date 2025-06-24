import { Router } from 'express';
import { getConnection } from '../../src/lib/database/connector.js';
import newsletterSchema from '../../src/lib/models/newsletter.model.js';

const router = Router();

router.use((req, res, next) => {
    try {
        req.dbConnection = getConnection();
        next();
    } catch (error) {
        console.error("Database connection failed:", error.message);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({ error: 'Failed to connect to the database.' }));
    }
});

router.post('/subscribe', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    const { email, source } = req.body;
    if (!email) {
        res.status(400).send(JSON.stringify({ error: 'Email is required.' }));
        return;
    }

    const Newsletter = req.dbConnection.model('Newsletter', newsletterSchema);
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
        res.status(409).send(JSON.stringify({ error: 'This email address is already subscribed.' }));
        return;
    }

    const newSubscriber = new Newsletter({
      email,
      metadata: { source: source || 'website', ipAddress: req.ip, userAgent: req.get('user-agent') }
    });

    await newSubscriber.save();
    res.status(201).send(JSON.stringify({ message: 'Successfully subscribed to the newsletter!' }));

  } catch (error) {
    if (error.name === 'ValidationError') {
        res.status(400).send(JSON.stringify({ error: error.message }));
        return;
    }
    if (error.code === 11000) {
        res.status(409).send(JSON.stringify({ error: 'This email address is already subscribed.' }));
        return;
    }
    console.error('Newsletter subscription error:', error);
    res.status(500).send(JSON.stringify({ error: 'An internal server error occurred.' }));
  }
});

export default router;