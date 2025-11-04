import { Injectable } from '@nestjs/common';
import { BaseIntegrationService } from '../../integrations/base-integration/base-integration.service';
import type { IntegrationMetadata } from '../base-integration/integration.interface';
import { LogsService } from '../../logs/logs.service';

@Injectable()
export class PokemonService {
  constructor(
    private readonly integrationService: BaseIntegrationService,
    private readonly logsService: LogsService,
  ) {}

  async getPokemon(metadata: IntegrationMetadata, ipAddress?: string) {
    const startTime = Date.now();

    // LOG: Inicio
    await this.logsService.logIntegrationStart('pokemon-api', ipAddress);

    try {
      const data = await this.integrationService.fetchData(metadata);
      const durationMs = Date.now() - startTime;

      // LOG: Éxito
      await this.logsService.logIntegrationSuccess('pokemon-api', durationMs);

      return {
        name: data.name,
        abilities: data.abilities.map(a => a.ability.name),
        weight: data.weight,
        types: data.types.map(t => t.type.name),
      };
    } catch (error) {
      const durationMs = Date.now() - startTime;

      // LOG: Error
      await this.logsService.logIntegrationError('pokemon-api', error, durationMs);

      throw error; // Para que el cliente vea el error
    }
  }
}