import IORedis from 'ioredis';
import 'dotenv/config';

const connection = new IORedis({
  host: '127.0.0.1', 
  port: 6379,
  maxRetriesPerRequest: null,
  enableReadyCheck: false    
}); 
export default connection;
