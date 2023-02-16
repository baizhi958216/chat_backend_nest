import { IsEmail, IsNotEmpty } from 'class-validator';

/*  
    验证来自前端的信息
    
    邮箱
    密码
*/

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
