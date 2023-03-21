import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GenAudioDto {
  @ApiProperty({
    example: '苹果的英文是什么?',
    description: '需要回复的问题',
  })
  @IsNotEmpty()
  /**
   * @param message 生成的语音消息
   */
  message: string;
  /**
   * @param message 生成的角色
   */
  role: string;
  /**
   * @param message 需要生成的语种
   */
  language: string;
}
