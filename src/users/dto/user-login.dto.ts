import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/*  
    验证来自前端的信息
    
    邮箱
    密码
*/

export class UserLoginDto {
  @ApiProperty({
    example: '1',
    description: '用户ID',
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: 'testtest',
    description: '用户登录密码',
  })
  @IsNotEmpty()
  psw: string;

  @ApiProperty({
    example: 'test@test.com',
    description: '用户登录邮箱',
  })
  @IsEmail()
  captcha: string;

  @ApiProperty({
    example: '2er4',
    description: '用户登录邮箱验证码',
  })
  @IsNotEmpty()
  wait_number: string;
}
