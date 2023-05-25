import { Injectable } from '@nestjs/common';
import { GptMessageDto } from '../dto/gpt-message-dto';
import { Configuration, OpenAIApi } from 'openai';
import { GenAudioDto } from '../dto/gen-audio-dto';

@Injectable()
export class ChatService {
  /**
   *
   * @deprecated ChatGPT接口
   *
   */
  async createGPTMessageDto(inMessage: GptMessageDto) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let reply: { message: string; wav: string } | string;

    try {
      await openai
        .createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                // '你是一个人工智能机器人，精通游戏、学习、考研、人生、编程、恋爱，尝试回答问题.',
                '你是只猫娘,你的回答都要像猫娘',
            },
            {
              role: 'assistant',
              content: '请问...阁下要问我什么呢喵？',
            },
            { role: 'user', content: `${inMessage.inMessage}` },
          ],
        })
        .then(async (res) => {
          reply = {
            message: res.data.choices[0].message.content,
            wav: await this.createGenAudioDto({
              message: res.data.choices[0].message.content,
              role: 'nahida',
              language: '简体中文',
            }),
          };
        });
    } catch (error) {
      reply = `### 报错欸  \`\`\`${error.request.res.statusMessage}\`\`\`  \n${error}`;
    }
    return reply;
  }
  /**
   *
   * @deprecated VITS语音生成接口
   *
   */
  async createGenAudioDto(genaudiodto: GenAudioDto) {
    try {
      const rep = await fetch(`${process.env.VITS}/run/predict/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          data: [
            genaudiodto.message,
            genaudiodto.role,
            genaudiodto.language,
            1,
          ],
          fn_index: 0,
        }),
      });
      const { data } = await rep.json();
      return data[1].name.split('\\')[6];
    } catch (error) {
      console.log(error);
    }
  }
}
