import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieFormPageComponent } from './movie-form-page.component';

describe('MovieFormPageComponent', () => {
  let component: MovieFormPageComponent;
  let fixture: ComponentFixture<MovieFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieFormPageComponent],
      imports: [ReactiveFormsModule]  // Asegúrate de importar ReactiveFormsModule si tu componente lo usa
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
