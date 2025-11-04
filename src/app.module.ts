import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './integrations/pokemon/pokemon.module';
import { BaseIntegrationModule } from './integrations/base-integration/base-integration.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [PokemonModule, BaseIntegrationModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
