import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/*  
    验证来自前端的信息
    
    邮箱
    密码
*/

export class CreateUserDto {
  @ApiProperty({
    example: 'test',
    description: '用户昵称',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'testtest',
    description: '用户注册密码',
  })
  @IsNotEmpty()
  psw: string;

  @ApiProperty({
    example: 'testtest',
    description: '用户注册邮箱',
  })
  @IsEmail()
  captcha: string;

  @ApiProperty({
    example: 'testtest',
    description: '用户注册邮箱验证码',
  })
  @IsNotEmpty()
  wait_number: string;
}
