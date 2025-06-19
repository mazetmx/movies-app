import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { MovieCard } from './movie-card/movie-card';

// Models
import { Movie } from './models/Movie';

// Services
import { MovieService } from './services/MovieService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getNowPlayingMovies(1).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
