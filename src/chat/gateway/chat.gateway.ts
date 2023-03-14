import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ChatService } from '../service/chat.service';
import { MessageDto } from '../dto/message-dto';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @SubscribeMessage('inMessage')
  async inMessage(@MessageBody() createWsMessageDto: MessageDto) {
    return this.chatService.createWsMessageDto(
      JSON.parse(createWsMessageDto.toString()),
    );
  }
}
