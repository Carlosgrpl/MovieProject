import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  /* Cada ruta será un objeto, que tiene dos propiedades, un path y un component */
  {path: "", component: HomeComponent},
  {path: "movies", component: MovieListComponent },
  {path: "movies/:movieName", component: MovieDetailComponent },
  /* -> esta me falta, ruta con parámetros ... { path: "movies/ :movieName", component: MovieDextailComponent}, ruta parametrizada */
  {path: "create", component: MovieFormPageComponent },
];
{path: "user", component: UserListComponent},
/* Al meterlo aqui debajo VSC lo mete arriba directamente */
