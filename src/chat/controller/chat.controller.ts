import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenAudioDto } from '../dto/gen-audio-dto';
import { GptMessageDto } from '../dto/gpt-message-dto';
import { ChatService } from '../service/chat.service';
import { ApiResponseProperty } from '@nestjs/swagger';

@ApiTags('聊天')
@Controller('/api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  /**
   *
   * @deprecated ChatGPT接口
   *
   */
  @Post('/chatgpt')
  @ApiOperation({ summary: 'chatgpt对话', deprecated: true })
  @ApiResponse({
    status: 201,
    description: '自定义状态码',
    type: GptMessageDto,
  })
  chatgpt(@Body() messageDto: GptMessageDto) {
    return this.chatService.createGPTMessageDto(messageDto);
  }

  /**
   *
   * @deprecated VITE语音生成接口
   *
   */
  @Post('/vits')
  @ApiOperation({ summary: '生成语音', deprecated: true })
  @ApiResponse({
    status: 201,
    description: '自定义状态码',
    type: GenAudioDto,
  })
  genaudio(@Body() genaudioDto: GenAudioDto) {
    return this.chatService.createGenAudioDto(genaudioDto);
  }
}
