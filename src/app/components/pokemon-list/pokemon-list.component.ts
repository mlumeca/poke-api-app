import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-list.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  
  pokemonList: Pokemon[] = [];

  constructor(private pokemonServices: PokemonService) {}

  ngOnInit(): void {
    this.pokemonServices.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
  }
}
