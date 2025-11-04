import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { BaseIntegrationModule } from '../base-integration/base-integration.module';

@Module({
  imports: [BaseIntegrationModule],
  providers: [PokemonService],
  controllers: [PokemonController]
})
export class PokemonModule {}
