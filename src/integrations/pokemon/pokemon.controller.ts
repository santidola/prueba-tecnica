import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    async getPokemon(@Body() metadata: any) {
        return this.pokemonService.getPokemon(metadata);
    }
}
