import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  SayHello() {
    return 'Hi';
  }

  @Post('/api/createUser')
  CreateUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //   通过ID查找用户
  @Get(':id')
  FindByID(@Param('id') id: number) {
    return this.usersService.findUserByID(id);
  }

  //   通过ID登录
  @Post('/api/loginByID')
  LoginByID(@Body('id') id: number) {
    return this.usersService.loginUserByID(id);
  }

  //   通过邮箱登录
  @Post('/api/loginByEmail')
  LoginByEmail(@Body('email') email: string) {
    return this.usersService.loginUserByEmail(email);
  }
}
