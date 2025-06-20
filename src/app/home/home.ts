import { Component, inject } from '@angular/core';

// Components
import { Navbar } from '../navbar/navbar';
import { MovieCard } from '../movie-card/movie-card';

// Models
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';
import { WatchListService } from '../services/WatchListService';

@Component({
  selector: 'home',
  imports: [MovieCard, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movies: Movie[] = [];

  currentPage = 1;

  private movieService = inject(MovieService);
  public watchListService = inject(WatchListService);

  ngOnInit() {
    this.loadMoviesPage(1);
  }

  loadMoviesPage(pageNum: number) {
    this.movieService.getNowPlayingMovies(this.currentPage).subscribe((response: any) => {
      this.movies = response.results;
    });
  }

  previousPage() {
    this.loadMoviesPage(--this.currentPage);
  }

  nextPage() {
    this.loadMoviesPage(++this.currentPage);
  }
}
