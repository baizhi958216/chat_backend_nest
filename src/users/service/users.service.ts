import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Format } from 'src/utils/format.util';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from '../dto/user-login.dto';
import { client } from 'src/utils/redis.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // 新增用户
  async createUser(createUserDto: CreateUserDto) {
    const logger = new Logger();
    logger.warn(`用户邮箱: ${createUserDto.captcha} 请求注册新用户...`);
    const { name, captcha, wait_number } = createUserDto;
    try {
      const email = await this.usersRepository.findOne({
        where: {
          captcha: captcha,
        },
      });
      if (email) {
        return Format.getInstance().message(400, '该邮箱已存在');
      }

      if (wait_number != (await client.get(captcha))) {
        return Format.getInstance().message(400, '验证码错误');
      }

      createUserDto.psw = await bcrypt.hash(
        createUserDto.psw,
        parseInt(process.env.BCRYPT_SALT),
      );
      const user = await this.usersRepository.save(createUserDto);
      logger.warn(
        `用户邮箱: ${createUserDto.captcha} 注册新用户ID ${user.id} 名称 ${name} 成功!`,
      );
      return Format.getInstance().message(200, '注册成功');
    } catch (err) {
      logger.error(err);
    }
  }

  // 通过ID查找用户
  async findUserByID(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async userLogin(userLoginDto: UserLoginDto) {
    const logger = new Logger();
    logger.warn(`用户ID: ${userLoginDto.id} 请求登录......`);
    const { id, psw, captcha, wait_number } = userLoginDto;
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        return Format.getInstance().message(402, '登录失败, 该用户不存在');
      }

      if (wait_number != (await client.get(captcha))) {
        return Format.getInstance().message(400, '验证码错误');
      }

      const hashedpsw = await bcrypt.compare(psw, user.psw);
      if (hashedpsw) {
        delete user.psw;
        logger.log(`用户ID: ${id} 登录成功......`);
        return Format.getInstance().message(200, user);
      } else {
        logger.warn(`用户ID: ${id} 登录失败, 密码错误......`);
        return Format.getInstance().message(401, {});
      }
    } catch (err) {
      logger.error(err);
    }
  }
}
