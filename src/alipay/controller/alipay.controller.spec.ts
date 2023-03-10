import { Test, TestingModule } from '@nestjs/testing';
import { AlipayController } from './alipay.controller';
import { AlipayService } from '../service/alipay.service';

describe('AlipayController', () => {
  let controller: AlipayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlipayController],
      providers: [AlipayService],
    }).compile();

    controller = module.get<AlipayController>(AlipayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
