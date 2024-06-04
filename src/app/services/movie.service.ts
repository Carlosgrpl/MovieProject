import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /* Esto está mal */
  constructor() { }
/* Esto está mal */

addMovie(movie: Movie): void {
  this.movies.push(movie);

  /* Esta parte está mal */
  getMovie (movieName: string) {
    find (movie => movie.name === movieName);
    return this.movies;
  /* Esta parte está mal */
  } 
}