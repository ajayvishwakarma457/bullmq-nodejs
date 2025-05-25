import { Queue } from 'bullmq';
import connection from '../config/redis.js';

const testQueue = new Queue('test-queue', { connection });
export default testQueue;
