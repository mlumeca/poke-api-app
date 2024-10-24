import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemonId: string | null = '';
  pokemon: PokemonDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    debugger;
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    debugger;
    
    this.pokemonService.getOnePokemon(parseInt(this.pokemonId!)).subscribe((response) => {
      this.pokemon = response;
    });
  }
}