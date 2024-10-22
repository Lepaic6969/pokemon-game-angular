import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon.interface';
import { getNumbers } from '../helpers/getNumbers.helper';
//Esto es lo nuevo
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons:Pokemon[]=[];
  public pokemon!:Pokemon;
  private baseEndpoint='https://pokeapi.co/api/v2/pokemon';
  constructor(private http:HttpClient){};

  searchPokemons():void{
    //Obtengo los números de los pokemons
    const numbers=getNumbers();
    //Defino las peticiones
    const peticion1 = this.http.get<Pokemon>(`${this.baseEndpoint}/${numbers[0]}`);
    const peticion2 = this.http.get<Pokemon>(`${this.baseEndpoint}/${numbers[1]}`);
    const peticion3 = this.http.get<Pokemon>(`${this.baseEndpoint}/${numbers[2]}`);
    const peticion4 = this.http.get<Pokemon>(`${this.baseEndpoint}/${numbers[3]}`);

    forkJoin([peticion1, peticion2, peticion3, peticion4]).subscribe(
      resultados => {
        // Aquí se ejecuta después de que todas las peticiones han terminado
        this.pokemons=[...resultados];
        // Selecciono el Pokemón sólo después de tener la respuesta de las peticiones
        this.selectPokemon();
      },
      error => {
        console.error('Error en alguna de las peticiones:', error);
      }
    );
  }

  selectPokemon():void{
    this.pokemon=this.pokemons[Math.floor(Math.random()*4)];
  }
}
