import { Logger } from '@nestjs/common';
import { createClient, RedisClientType, RedisDefaultModules } from 'redis';

const client: RedisClientType<RedisDefaultModules> =
  process.env.REDIS_HOST == 'redis'
    ? createClient({
        url: 'redis://redis:6379',
      })
    : createClient();

client.on('connect', () => {
  Logger.log(
    `
  
  
  Redis已连接 redis://redis:6379
  
  
  `,
    '🚀',
  );
});

export { client };
