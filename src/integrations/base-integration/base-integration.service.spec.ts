import { Test, TestingModule } from '@nestjs/testing';
import { BaseIntegrationService } from './base-integration.service';

describe('BaseIntegrationService', () => {
  let service: BaseIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseIntegrationService],
    }).compile();

    service = module.get<BaseIntegrationService>(BaseIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
