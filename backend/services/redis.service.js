import { createClient } from 'redis';
import { promisify } from 'util';

// Create the Redis client
const redisClient = createClient({
  url: process.env.REDIS_CLIENT_URL, // specify the Redis server URL
});

// Event listeners for connection success and errors
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

(async () => {
  try {
    await redisClient.connect();
    console.log('Redis client connected');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
})();

export default redisClient;
