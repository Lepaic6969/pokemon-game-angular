import { Component} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent{
  public showPokemon:boolean=false;
  public message:string='';

  constructor(private pokemonService:PokemonService){
    this.pokemonService.searchPokemons();
  }

  get pokemons():Pokemon[]{
    return this.pokemonService.pokemons;
  }
  get pokemonId():number{
    return this.pokemonService.pokemon.id;
  }

  onSelectPokemon(id:number):void{
    //Como primero aclaro la imagen
    this.showPokemon=true;

    //Verifico si aceró o no
    if(id===this.pokemonService.pokemon.id){
      this.message="🎉¡Felicidades, acertaste¡ Es "+this.pokemonService.pokemon.name+". 🎉";
    }else{
      this.message=`Ops, era ${this.pokemonService.pokemon.name}. Has perdido. 🙉`
    }

  }
  onResetGame():void{
    //Reseteamos las variables
    this.pokemonService.resetPokemons();
    this.showPokemon=false;
    //Realizamos nuevamente la petición para que se llene nuevamente el arreglo de pokemons
    //y se pueda jugar nuevamente
    this.pokemonService.searchPokemons();
  }

}


