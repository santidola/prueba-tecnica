import { Injectable } from '@nestjs/common';
import { BaseIntegrationService } from '../../integrations/base-integration/base-integration.service';
import type { IntegrationMetadata } from '../base-integration/integration.interface';

@Injectable()
export class PokemonService {
    constructor(private readonly integrationService: BaseIntegrationService) { }

    async getPokemon(metadata: IntegrationMetadata) {
        const data = await this.integrationService.fetchData(metadata);
          console.log('📦 DATA RECIBIDA:', data); 

        // ahora sí puedes acceder a data.name
        return {
            name: data.name,
            abilities: data.abilities.map(a => a.ability.name),
            weight: data.weight,
            types: data.types.map(t => t.type.name),
        };
    }
}
