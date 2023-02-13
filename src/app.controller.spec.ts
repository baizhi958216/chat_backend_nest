import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUtil } from './utils/file.util';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a HTML document', async () => {
      const dom = await FileUtil.getInstance().readTemplate('Main.html');
      expect(appController.Nest()).toBe(dom);
    });
  });
});
