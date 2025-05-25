import { Queue } from 'bullmq';
import connection from '../config/redis.js';

const notificationQueue = new Queue('notification-queue', 
    { 
        connection, 
        limiter: {
            max: 2,           // Max 5 jobs
            duration: 10000    // Per 1000 ms (1 second)
        } 
    });
export default notificationQueue;
