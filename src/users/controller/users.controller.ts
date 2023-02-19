import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUserLogin } from '../service/IUserForm.interface';
import { UsersService } from '../service/users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  SayHello() {
    return 'Hi';
  }

  @Post('/createUser')
  CreateUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //   通过ID查找用户
  @Get(':id')
  FindByID(@Param('id') id: number) {
    return this.usersService.findUserByID(id);
  }

  @Post('/userlogin')
  UserLogin(
    @Body()
    userform: IUserLogin,
  ) {
    return this.usersService.userLogin(userform);
  }
}
