import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('后端首页')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '字符格式返回首页HTML' })
  @ApiResponse({
    status: 200,
    description: '返回一个网页',
  })
  Nest(): Promise<string> {
    return this.appService.Nest();
  }
}
