import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  // StaticAssets
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('立交桥即时聊天后端')
    .setDescription('Chat API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(`🚀 服务端已开启 http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
