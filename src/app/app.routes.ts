import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';

export const routes: Routes = [
  /* Cada ruta será un objeto, que tiene dos propiedades, un path y un component */
  {path: "", component: HomeComponent},
  {path: "movies", component: MovieListComponent },
  {path: "create", component: MovieFormPageComponent },
];
/* Al meterlo aqui debajo VSC lo mete arriba directamente */
