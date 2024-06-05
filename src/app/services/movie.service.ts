import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model'; // Corrección en la importación del modelo Movie

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  heading: string;
  movies: Movie[];

  constructor() {
    this.heading = 'Movie List';

    this.movies = [
      {
        name: 'El Señor de los Anillos',
        duration: 200,
        director: 'Peter Jackson',
      },
      {
        name: 'La Naranja Mecánica',
        duration: 120,
        director: 'Stanley Kubrick',
      }
    ];
  }

  getMovie(name: string): Movie | undefined {
    return this.movies.find(movie => movie.name === name);
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
}
