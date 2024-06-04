import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

constuctor (
  private route: ActivatedRoute,
  public movieService: MovieService
) {
  const movieName = route.snapshot.params["movieName"]; /* Nombre del parametro de la ruta */

  this.selectedMovie = movieService.getMovie(movieName);
}
}
