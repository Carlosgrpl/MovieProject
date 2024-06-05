import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { MovieService } from './movie.service'; 

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(private movieService: MovieService) { // Corregido: Quité @Inject y ajusté la visibilidad de movieService
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]);
    this.director = new FormControl('', Validators.required);

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }

  handleSubmit(): void {
    console.log('Movie Created:', this.movieForm.value);
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }
}
