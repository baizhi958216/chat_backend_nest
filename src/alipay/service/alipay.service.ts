import { Injectable } from '@nestjs/common';
import { alipaySdk } from 'src/utils/alipay.util';
import { AliPayDto } from '../dto/alipay.entity';

@Injectable()
export class AlipayService {
  async createPayment(aliPayDto: AliPayDto) {
    const bizContent = {
      out_trade_no: aliPayDto.outTradeNo,
      product_code: 'FAST_INSTANT_TRADE_PAY',
      subject: '商品', // 订单标题
      body: '商品详情', // 订单描述
      total_amount: '59999.00', // 订单总金额，单位为元，精确到小数点后两位
    };
    const result = alipaySdk(process.env.APPID).pageExec(
      'alipay.trade.page.pay',
      {
        method: 'GET',
        bizContent,
      },
    );
    return result;
  }
}
