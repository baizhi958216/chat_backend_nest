import { Module } from '@nestjs/common';
import { AlipayService } from './service/alipay.service';
import { AlipayController } from './controller/alipay.controller';

@Module({
  controllers: [AlipayController],
  providers: [AlipayService],
})
export class AlipayModule {}
