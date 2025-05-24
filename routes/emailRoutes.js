import express from 'express';
import { queueEmail } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send-email', queueEmail);

export default router;
