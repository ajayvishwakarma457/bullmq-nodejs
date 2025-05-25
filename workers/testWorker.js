import { Worker } from 'bullmq';
import connection from '../config/redis.js';
import { testEmailJob } from '../jobs/testJob.js';

const worker = new Worker('test-queue', testEmailJob, { connection });

worker.on('completed', job => {
  console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed: ${err.message}`);
});


