import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';
import { WatchListService } from '../services/WatchListService';

@Component({
  selector: 'movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {
  movie: any;

  movieId = signal('');
  private activatedRoute = inject(ActivatedRoute);

  public watchListService = inject(WatchListService);

  constructor(private movieService: MovieService) {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId.set(params['id']);
    });
  }

  ngOnInit() {
    this.movieService.getMovieById(this.movieId()).subscribe((response: any) => {
      this.movie = response;
    });
  }

  toggleWishlist() {
    if (this.watchListService.contains(this.movie.id.toString())) {
      this.watchListService.removeWatchListId(this.movie.id.toString());
    } else {
      this.watchListService.addWatchListId(this.movie.id.toString());
    }
  }
}
