import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { CreateEmailDto } from '../dto/create-email.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('邮件验证')
@Controller('/api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/createRegister')
  @ApiOperation({ summary: '用户注册: 发送邮箱验证码' })
  @ApiResponse({
    status: 201,
    description: '返回邮箱',
    type: CreateEmailDto,
  })
  CreateRegister(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.createRegister(createEmailDto);
  }

  @Post('/createLogin')
  @ApiOperation({ summary: '用户登录: 发送邮箱验证码' })
  @ApiResponse({
    status: 201,
    description: '返回邮箱',
    type: CreateEmailDto,
  })
  CreateLogin(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.createLogin(createEmailDto);
  }
}
