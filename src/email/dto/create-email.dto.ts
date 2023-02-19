import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmailDto {
  @ApiProperty({
    example: 'test@test.com',
    description: '用户注册/登录邮箱',
  })
  @IsEmail()
  @IsNotEmpty()
  captcha: string;
}
