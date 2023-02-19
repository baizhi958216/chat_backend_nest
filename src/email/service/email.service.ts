import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../dto/create-email.dto';

@Injectable()
export class EmailService {
  createRegister(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  createLogin(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }
}
