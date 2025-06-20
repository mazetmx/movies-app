import { Component, Input, inject } from '@angular/core';

// Models
import { Movie } from '../models/Movie';

// Services
import { WatchListService } from '../services/WatchListService';

@Component({
  selector: 'movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() movie!: Movie;

  public watchListService = inject(WatchListService);

  constructor() {}

  toggleWishlist() {
    if (this.watchListService.contains(this.movie.id.toString())) {
      this.watchListService.removeWatchListId(this.movie.id.toString());
    } else {
      this.watchListService.addWatchListId(this.movie.id.toString());
    }
  }
}
