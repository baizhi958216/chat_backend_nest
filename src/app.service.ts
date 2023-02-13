import { Injectable } from '@nestjs/common';
import { FileUtil } from './utils/file.util';

@Injectable()
export class AppService {
  async Nest(): Promise<string> {
    return await FileUtil.getInstance().readTemplate('Main.html');
  }
}
