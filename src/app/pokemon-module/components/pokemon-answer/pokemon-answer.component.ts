import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'pokemon-answer',
  templateUrl: './pokemon-answer.component.html',
  styleUrl: './pokemon-answer.component.css'
})
export class PokemonAnswerComponent {
  @Input()
  public message:string='Mensaje';
  @Output()
  public onReset:EventEmitter<void>=new EventEmitter();

  onResetGame():void{
    this.onReset.emit();
  }
}
