import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit{

  constructor(private pokemonService:PokemonService){}
  ngOnInit(): void {
    this.pokemonService.searchPokemons();
  }

  get pokemons():Pokemon[]{
    return this.pokemonService.pokemons;
  }
  get pokemonId():number{
    return this.pokemonService.pokemon.id;
  }

}


