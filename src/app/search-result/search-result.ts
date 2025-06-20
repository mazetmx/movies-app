import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Components
import { MovieCard } from '../movie-card/movie-card';
import { Navbar } from '../navbar/navbar';

// Models
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'app-search-result',
  imports: [MovieCard, Navbar],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css'
})
export class SearchResult implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  searchTerm: string = "";
  movies: Movie[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.searchTerm = params.get('term') || '';
      this.searchMovies();
    });
  }

  searchMovies() {
    this.movieService.getMoviesByTitle(this.searchTerm).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
