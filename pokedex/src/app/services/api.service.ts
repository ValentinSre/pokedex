import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api-pokemon-fr.vercel.app';

  constructor(private http: HttpClient) {}

  getAllPokemon() {
    return this.http.get(`${this.apiUrl}/api/v1/pokemon`);
  }

  getRandomPokemonId() {
    const id = Math.floor(Math.random() * 494) + 1;
    return id;
  }

  getRandomPokemon() {
    const randomPokemonId = this.getRandomPokemonId();
    return this.http.get(`${this.apiUrl}/api/v1/pokemon/${randomPokemonId}`);
  }
}
