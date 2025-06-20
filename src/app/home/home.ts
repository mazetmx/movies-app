import { Component, inject } from '@angular/core';

// Components
import { Navbar } from '../navbar/navbar';
import { MovieCard } from '../movie-card/movie-card';

// Models
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'home',
  imports: [MovieCard, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movies: Movie[] = [];

  private movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.getNowPlayingMovies(1).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
