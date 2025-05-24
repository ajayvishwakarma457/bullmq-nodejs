import express from 'express';

import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter.js';
import { ExpressAdapter } from '@bull-board/express';

import emailQueue from './queues/emailQueue.js'; 
import notificationQueue from './queues/notificationQueue.js'; 

import emailRoutes from './routes/emailRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

const app = express();
const PORT = 3000;

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(emailQueue), new BullMQAdapter(notificationQueue)], 
  serverAdapter,
});

app.use(express.json());
app.use('/api', emailRoutes);
app.use('/api', notificationRoutes);
app.use('/admin/queues', serverAdapter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Bull Board is available at http://localhost:${PORT}/admin/queues`);
});
