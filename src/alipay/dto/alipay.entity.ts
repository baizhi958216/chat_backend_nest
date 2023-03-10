import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AliPayDto {
  @ApiProperty({
    description: '商户订单号,64个字符以内、可包含字母、数字、下划线,且不能重复',
  })
  @IsNotEmpty()
  outTradeNo: string;
}
