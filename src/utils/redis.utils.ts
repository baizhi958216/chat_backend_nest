import { Logger } from '@nestjs/common';
import { createClient, RedisClientType, RedisDefaultModules } from 'redis';

const client: RedisClientType<RedisDefaultModules> = process.env.REDIS_HOST == 'redis'?createClient({
  url: 'redis://redis:6379',
}):createClient();

client.on('connect', () => {
  Logger.debug('Redis已连接');
});
client.on('error', (err) => console.log('Redis Client错误', err));

export { client };
