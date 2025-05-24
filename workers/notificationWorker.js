import { Worker } from 'bullmq';
import connection from '../config/redis.js';
import { notificationJob } from '../jobs/notificationJob.js';

const worker = new Worker('notification-queue', notificationJob, { connection });

worker.on('completed', job => {
  console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed: ${err.message}`);
});
