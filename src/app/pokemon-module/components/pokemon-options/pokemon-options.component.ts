import { Component,Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-options',
  templateUrl: './pokemon-options.component.html',
  styleUrl: './pokemon-options.component.css'
})
export class PokemonOptionsComponent{

  @Input()
  public pokemons!:Pokemon[];

  onClick():void{
    alert('Funcionalidad de mostrar el resultado en desarrollo');
  }
}
