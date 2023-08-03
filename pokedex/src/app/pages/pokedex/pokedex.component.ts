import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  originalPokedexData: any[] = [];
  filteredPokedexData: any[] = [];

  constructor(private pokemonService: ApiService) {}

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(
      (list: any) => {
        this.originalPokedexData = list;
        this.filteredPokedexData = list;
      },
      (error: any) => {
        console.error('Error fetching Pokémon:', error);
      }
    );
  }

  filterData(event: any) {
    const filterValue = event.target.value.toLowerCase();
    if (!filterValue) {
      // Si l'input est vide, réinitialisez les données filtrées
      this.filteredPokedexData = this.originalPokedexData;
    } else {
      // Sinon, filtrez les données en fonction de la valeur saisie
      this.filteredPokedexData = this.originalPokedexData.filter(
        (pokemon: any) => pokemon.name.fr.toLowerCase().includes(filterValue)
      );
    }
  }

  getRandomPokemon() {
    const randomIndex = Math.floor(
      Math.random() * this.filteredPokedexData.length
    );
    // Récupérez un Pokémon aléatoire en utilisant l'index randomIndex
  }
}
