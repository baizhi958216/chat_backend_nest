import { Injectable } from '@nestjs/common';
import { MessageDto } from '../dto/message-dto';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatService {
  async createWsMessageDto(inMessage: MessageDto) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let reply = '';

    try {
      await openai
        .createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                '你是一个人工智能机器人，精通游戏、编程、恋爱，尝试回答问题.',
            },
            {
              role: 'assistant',
              content: '请问有什么问题我可以帮助您解答吗？',
            },
            { role: 'user', content: `${inMessage.inMessage}` },
          ],
        })
        .then((res) => {
          reply = res.data.choices[0].message.content;
        });
    } catch (error) {
      reply = `报错欸${error}`;
    }
    return reply;
  }
}
