import { Component,Input } from '@angular/core';

@Component({
  selector: 'pokemon-picture',
  templateUrl: './pokemon-picture.component.html',
  styleUrl: './pokemon-picture.component.css'
})
export class PokemonPictureComponent {
  @Input()
  public pokemonId!:number;
  @Input()
  public showPokemon!:boolean;


  get pokemonUrl():string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId || 4}.svg`
  }
}
