import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // 新增用户
  async createUser(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.save(createUserDto);

    // 删除密码后再返回前端
    delete user.password;
    return user;
  }

  // 通过ID查找用户
  async findUserByID(id: number): Promise<User> {
    Logger.log(id);
    return;
  }

  // 通过ID查找用户 (ID登录)
  async loginUserByID(id: number) {
    return await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  // 通过邮箱查找用户 (邮箱登录)
  async loginUserByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
