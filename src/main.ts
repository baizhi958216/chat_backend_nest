import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { client } from './utils/redis.utils';
import { HttpServiceResponseInterceptor } from './interceptor/http-service.response.interceptor';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  // StaticAssets
  app.useStaticAssets(
    `${process.env.HOME == '/root' ? '/tmp' : process.env.TEMP}`,
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Interceptors
  app.useGlobalInterceptors(new HttpServiceResponseInterceptor());

  // Redis
  await client.connect().catch((err) => {
    Logger.error(`
 

    😈 Redis连接失败, 请检查服务是否已开启
    
    
    `);
    throw err;
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('立交桥即时聊天后端')
    .setDescription('Chat API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000).then(() => {
    Logger.log(
      `
    

      🚀 服务端已启动 http://localhost:${port}
    
    
    `,
    );
  });
}
bootstrap();
