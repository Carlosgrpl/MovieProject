import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../movie.service'; // Añadido la importación de MovieService

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'], // Cambiado a styleUrls
})
export class MovieListComponent {
  constructor(public movieService: MovieService) {} // Agregado el parámetro movieService al constructor
}

@inject ({ movieService: MovieService })
class MovieListComponent {
  constructor(public movieService: MovieService) {}
}