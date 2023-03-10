import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AliPayDto } from '../dto/alipay.entity';
import { AlipayService } from '../service/alipay.service';

@ApiTags('支付宝')
@Controller('alipay')
export class AlipayController {
  constructor(private readonly alipayService: AlipayService) {}

  @Post('/createPayLink')
  @ApiOperation({ summary: '返回支付宝支付链接' })
  @ApiResponse({
    status: 201,
    description: '返回支付宝支付链接',
  })
  CreateRegister(@Body() aliPayDto: AliPayDto) {
    return this.alipayService.createPayment(aliPayDto);
  }
}
