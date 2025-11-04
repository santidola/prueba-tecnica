import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { BaseIntegrationModule } from '../base-integration/base-integration.module';
import { LogsModule } from 'src/logs/logs.module';

@Module({
  imports: [BaseIntegrationModule,LogsModule],
  providers: [PokemonService],
  controllers: [PokemonController]
})
export class PokemonModule {}
