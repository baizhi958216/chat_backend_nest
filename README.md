<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository for [Green-Hair](https://github.com/Green-Hair).

## 添加支付宝应用私钥、支付宝根证书、支付宝公钥证书和应用公钥证书。

```
#至src/alipay/certs
-src
  -alipay
    -certs
      alipayPublicCert.crt
      alipayRootCert.crt
      appPublicCert.crt
      private-key.pem
```

## 添加 mysql/radis/SMTP/支付宝 APPID/OpenAI/VITS 配置信息

```bash
# 在当前目录新建.env文件, 内容如下
DB_TYPE=mysql
DB_HOST=mysql地址
DB_PORT=mysql端口
DB_USERNAME=mysql用户名
DB_PASSWORD=mysql密码
DB_NAME=数据库名

BCRYPT_SALT=bcrypt加盐轮循次数

REDIS_HOST=redis地址
REDIS_PORT=redis端口

MAIL_USER=用于发送验证码的邮箱地址
MAIL_SENDER=发件人(格式: "昵称" <邮箱>)
MAIL_SMTP=SMTP通行证

APPID=支付宝APPID

# https://platform.openai.com/account/api-keys
OPENAI_API_KEY=由OPENAI提供的APIKEY

VITS=VITS后端地址
```

## 配置依赖

```bash
$ pnpm install
```

## 开启服务

```bash
# 开发环境
$ pnpm run start

# 监听
$ pnpm run start:dev

# 生产环境
$ pnpm run start:prod
```

## 集成测试

```bash
# 单元测试
$ pnpm run test

# 端到端测试
$ pnpm run test:e2e

# 覆盖测试
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
