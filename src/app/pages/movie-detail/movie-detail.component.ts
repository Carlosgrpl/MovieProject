import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service'; // Corregido la ruta de importación de MovieService
import { Movie } from '../models/movie.model'; // Importa el modelo Movie si lo tienes definido
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'], // Cambiado a styleUrls
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: Movie | undefined; // Define el tipo del objeto seleccionado

  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieName = params['movieName'];
      this.selectedMovie = this.movieService.getMovie(movieName);
    });
  }
}

@inject ({ movieService: MovieService })
class MovieDetailComponent {
  constructor(public movieService: MovieService) {}
}

