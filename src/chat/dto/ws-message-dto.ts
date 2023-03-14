import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class WsMessageDto {
  @ApiProperty({
    example: '苹果的英文是什么?',
    description: '需要回复的问题',
  })
  @IsNotEmpty()
  inMessage: string;
}
