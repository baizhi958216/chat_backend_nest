import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../dto/create-email.dto';

@Injectable()
export class EmailService {
  createRegister(createEmailDto: CreateEmailDto) {
    return createEmailDto.captcha;
  }

  createLogin(createEmailDto: CreateEmailDto) {
    return createEmailDto.captcha;
  }
}
