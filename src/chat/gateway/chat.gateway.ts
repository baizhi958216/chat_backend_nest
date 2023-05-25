import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ChatService } from '../service/chat.service';
import { GptMessageDto } from '../dto/gpt-message-dto';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  /**
   *
   * @deprecated ChatGPT接口
   *
   */
  @SubscribeMessage('inGPTMessage')
  async inGPTMessage(@MessageBody() createWsMessageDto: GptMessageDto) {
    return this.chatService.createGPTMessageDto(
      JSON.parse(createWsMessageDto.toString()),
    );
  }
}
