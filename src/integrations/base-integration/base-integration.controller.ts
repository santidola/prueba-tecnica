import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { BaseIntegrationService } from './base-integration.service';
import type { IntegrationMetadata } from './integration.interface';

@Controller('integration')
export class BaseIntegrationController {
  constructor(private readonly integrationService: BaseIntegrationService) {}

  
  @Post()
  @HttpCode(HttpStatus.OK)
  async fetchExternal(@Body('metadata') metadata: IntegrationMetadata) {
  
    return this.integrationService.fetchData(metadata);
  }
}
