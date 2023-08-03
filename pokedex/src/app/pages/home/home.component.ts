import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemonName: string = '';
  pokemonImage: string = '';
  pokemonNumber: number = 0;
  pokemonTypes: any[] = [];
  pokemonHP: number = 0;
  pokemonAttack: number = 0;
  pokemonDefense: number = 0;
  pokemonSpecialAttack: number = 0;
  pokemonSpecialDefense: number = 0;
  pokemonSpeed: number = 0;

  constructor(private pokemonService: ApiService) {}

  // MODEL FOR THE 2D API
  // generateRandomPokemon() {
  //   this.pokemonService.getRandomPokemon().subscribe((pokemon: any) => {
  //     this.pokemonName = pokemon.name;
  //     this.pokemonImage = pokemon.image;
  //     this.pokemonNumber = pokemon.pokedexId;
  //     this.pokemonTypes = pokemon.apiTypes.map((type: any) => ({
  //       name: type.name,
  //       image: type.image,
  //     }));
  //     this.pokemonHP = pokemon.stats.HP;
  //     this.pokemonAttack = pokemon.stats.attack;
  //     this.pokemonDefense = pokemon.stats.defense;
  //     this.pokemonSpecialAttack = pokemon.stats.special_attack;
  //     this.pokemonSpecialDefense = pokemon.stats.special_defense;
  //     this.pokemonSpeed = pokemon.stats.speed;
  //   });
  // }

  generateRandomPokemon() {
    this.pokemonService.getRandomPokemon().subscribe((pokemon: any) => {
      this.pokemonName = pokemon.name.fr;
      this.pokemonImage = pokemon.sprites.regular;
      this.pokemonNumber = pokemon.pokedexId;
      this.pokemonTypes = pokemon.types.map((type: any) => ({
        name: type.name,
        image: type.image,
      }));
      this.pokemonHP = pokemon.stats.hp;
      this.pokemonAttack = pokemon.stats.atk;
      this.pokemonDefense = pokemon.stats.def;
      this.pokemonSpecialAttack = pokemon.stats.spe_atk;
      this.pokemonSpecialDefense = pokemon.stats.spe_def;
      this.pokemonSpeed = pokemon.stats.vit;
    });
  }

  ngOnInit() {
    this.generateRandomPokemon();
  }
}
