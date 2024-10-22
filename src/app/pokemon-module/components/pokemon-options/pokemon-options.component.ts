import { Component,EventEmitter,Input,Output} from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-options',
  templateUrl: './pokemon-options.component.html',
  styleUrl: './pokemon-options.component.css'
})
export class PokemonOptionsComponent{

  @Input()
  public pokemons!:Pokemon[];

  @Output()
  public onSelect:EventEmitter<number>=new EventEmitter();



  onClick(id:number):void{
    this.onSelect.emit(id);
  }
}
