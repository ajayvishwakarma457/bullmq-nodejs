import { Worker } from 'bullmq';
import connection from '../config/redis.js';
import { testEmailJob } from '../jobs/testJob.js';

const worker = new Worker('test-queue', testEmailJob, { connection, autorun: false });

worker.on('completed', (job, returnvalue) => {
  console.log(`Job ${job.id} completed`);
  console.log(`${returnvalue}`);
});

worker.on('progress', (job, progress) => {
  console.log(`Progress for Job ${job.id}:`, progress);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed: ${err.message}`);
});

worker.on('error', err => {
  console.error(err);
});

worker.run();






