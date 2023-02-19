import { Module } from '@nestjs/common';
import { EmailService } from './service/email.service';
import { EmailController } from './controller/email.controller';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
