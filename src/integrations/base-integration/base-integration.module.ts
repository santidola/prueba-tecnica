import { Module } from '@nestjs/common';
import { BaseIntegrationService } from './base-integration.service';
import { BaseIntegrationController } from './base-integration.controller';

@Module({
  controllers: [BaseIntegrationController],
  providers: [BaseIntegrationService],
  exports: [BaseIntegrationService],
})
export class BaseIntegrationModule {}
