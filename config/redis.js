import IORedis from 'ioredis';

const connection = new IORedis({
   host: '127.0.0.1', // or your Redis server
  port: 6379,
  maxRetriesPerRequest: null, // ✅ Required by BullMQ
  enableReadyCheck: false     // ✅ Optional but recommended
}); // defaults to localhost:6379
export default connection;
