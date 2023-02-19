import { Logger } from '@nestjs/common';
import { createClient, RedisClientType, RedisDefaultModules } from 'redis';

const client: RedisClientType<RedisDefaultModules> = createClient({
  password: process.env.REDIS_PASSWORD,
  database: parseInt(process.env.REDIS_DB),
});
client.on('connect', () => {
  Logger.debug('Redis已连接');
});
client.on('error', (err) => console.log('Redis Client错误', err));

export { client };
