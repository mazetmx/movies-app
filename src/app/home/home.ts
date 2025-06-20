import { Component } from '@angular/core';

// Components
import { MovieCard } from '../movie-card/movie-card';

// Models
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'home',
  imports: [MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getNowPlayingMovies(1).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
