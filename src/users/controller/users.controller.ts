import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { UsersService } from '../service/users.service';

@ApiTags('用户登录注册')
@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '得到欢迎语' })
  @ApiResponse({ status: 200, description: '返回Hi' })
  SayHello() {
    return 'Hi';
  }

  @Post('/createUser')
  @ApiOperation({ summary: '新建用户' })
  @ApiResponse({
    status: 201,
    description: '自定义状态码',
    type: CreateUserDto,
  })
  CreateUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //   通过ID查找用户
  @Get(':id')
  @ApiOperation({ summary: '通过ID查找用户' })
  @ApiResponse({ status: 200, description: '返回一个用户', type: Number })
  FindByID(@Param('id') id: number) {
    return this.usersService.findUserByID(id);
  }

  @Post('/userlogin')
  @ApiOperation({ summary: '用户登录' })
  @ApiResponse({ status: 201, description: '自定义状态码', type: UserLoginDto })
  UserLogin(
    @Body()
    userLoginDto: UserLoginDto,
  ) {
    return this.usersService.userLogin(userLoginDto);
  }
}
