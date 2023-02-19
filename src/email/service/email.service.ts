import { Injectable, Logger } from '@nestjs/common';
import { Format } from 'src/utils/format.util';
import { sendMail } from 'src/utils/mail.utils';
import { CreateEmailDto } from '../dto/create-email.dto';

@Injectable()
export class EmailService {
  async createRegister(createEmailDto: CreateEmailDto) {
    const strArr = '1234567890qwertyuiopasdfghjklzxcvbnm'.split('');
    let str = '';
    for (let index = 0; index < 4; index++) {
      str += strArr[Math.floor(Math.random() * strArr.length)];
    }

    const { response } = await sendMail(createEmailDto.captcha, str);
    Logger.warn(
      `向 ${createEmailDto.captcha} 发送注册验证码 ${str}, 状态 ${response}`,
    );

    return Format.getInstance().message(201, {
      msg: createEmailDto,
    });
  }

  async createLogin(createEmailDto: CreateEmailDto) {
    const strArr = '1234567890qwertyuiopasdfghjklzxcvbnm'.split('');
    let str = '';
    for (let index = 0; index < 4; index++) {
      str += strArr[Math.floor(Math.random() * strArr.length)];
    }

    const { response } = await sendMail(createEmailDto.captcha, str);
    Logger.warn(
      `向 ${createEmailDto.captcha} 发送登录验证码 ${str}, 状态 ${response}`,
    );

    return Format.getInstance().message(201, {
      msg: createEmailDto,
    });
  }
}
