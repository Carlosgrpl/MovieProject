import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-movie-form-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrls: ['./movie-form-page.component.css'] // Corrección aquí
})
export class MovieFormPageComponent {

}
