import { Controller, Post, Body, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import type { Request } from 'express';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async getPokemon(@Body() metadata: any, @Req() req: Request) {
    return this.pokemonService.getPokemon(metadata, req.ip);
  }
}