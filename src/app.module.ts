import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './integrations/pokemon/pokemon.module';
import { BaseIntegrationModule } from './integrations/base-integration/base-integration.module';
import { LogsModule } from './logs/logs.module';
import { Log } from './logs/entities/log.entity';

@Module({
  imports: [
    // 🔹 Carga variables de entorno (.env)
    ConfigModule.forRoot({ isGlobal: true }),

    // 🔹 Configura la conexión a la base de datos

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Log],
      synchronize: true, // solo en desarrollo
      ssl: false, // DESACTIVA SSL completamente
 
    }),

    PokemonModule,
    BaseIntegrationModule,
    LogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
