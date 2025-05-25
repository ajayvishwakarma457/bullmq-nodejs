import express from 'express';
import { testEmail } from '../controllers/testController.js';

const router = express.Router();

router.post('/test-email', testEmail);

export default router;
