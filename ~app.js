import express from 'express';

import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter.js'; 
import { ExpressAdapter } from '@bull-board/express';



const app = express();
const PORT = 3000;

import emailRoutes from './routes/emailRoutes.js';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(emailRoutes)],
  serverAdapter,
});


app.use(express.json());
app.use('/api', emailRoutes);
app.use('/admin/queues', serverAdapter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Bull Board is available at http://localhost:${PORT}/admin/queues`);
});
