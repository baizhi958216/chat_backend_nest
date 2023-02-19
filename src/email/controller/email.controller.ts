import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { CreateEmailDto } from '../dto/create-email.dto';

@Controller('/api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send/createRegister')
  CreateRegister(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.createRegister(createEmailDto);
  }

  @Post('/send/createLogin')
  CreateLogin(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.createLogin(createEmailDto);
  }
}
