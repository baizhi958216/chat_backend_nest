import { Module } from '@nestjs/common';
import { ChatService } from './service/chat.service';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatController } from './controller/chat.controller';

@Module({
  controllers: [ChatController],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
