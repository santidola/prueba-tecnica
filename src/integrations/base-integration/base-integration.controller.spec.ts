import { Test, TestingModule } from '@nestjs/testing';
import { BaseIntegrationController } from './base-integration.controller';

describe('BaseIntegrationController', () => {
  let controller: BaseIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseIntegrationController],
    }).compile();

    controller = module.get<BaseIntegrationController>(BaseIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
