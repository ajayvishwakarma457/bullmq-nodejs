import { Worker } from 'bullmq';
import connection from '../config/redis.js';
import { sendEmailJob } from '../jobs/emailJob.js';

const worker = new Worker('email-queue', sendEmailJob, { connection });

worker.on('completed', job => {
  console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed: ${err.message}`);
});


