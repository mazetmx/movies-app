import { Component, Input } from '@angular/core';

// Models
import { Movie } from '../models/Movie';

@Component({
  selector: 'movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() movie!: Movie;
}
