import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPictureComponent } from './components/pokemon-picture/pokemon-picture.component';
import { PokemonOptionsComponent } from './components/pokemon-options/pokemon-options.component';
import { PokemonAnswerComponent } from './components/pokemon-answer/pokemon-answer.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';



@NgModule({
  declarations: [
    PokemonPictureComponent,
    PokemonOptionsComponent,
    PokemonAnswerComponent,
    PokemonPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonPageComponent
  ]
})
export class PokemonModuleModule { }
