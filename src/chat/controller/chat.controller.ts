import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenAudioDto } from '../dto/gen-audio-dto';
import { MessageDto } from '../dto/message-dto';
import { ChatService } from '../service/chat.service';

@ApiTags('聊天')
@Controller('/api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Post('/chatgpt')
  @ApiOperation({ summary: 'chatgpt对话' })
  @ApiResponse({
    status: 201,
    description: '自定义状态码',
    type: MessageDto,
  })
  chatgpt(@Body() messageDto: MessageDto) {
    return this.chatService.createWsMessageDto(messageDto);
  }

  @Post('/vits')
  @ApiOperation({ summary: '生成语音' })
  @ApiResponse({
    status: 201,
    description: '自定义状态码',
    type: GenAudioDto,
  })
  genaudio(@Body() genaudioDto: GenAudioDto) {
    return this.chatService.createGenAudioDto(genaudioDto);
  }
}
