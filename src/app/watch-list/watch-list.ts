import { Component, inject } from '@angular/core';

// Components
import { MovieCard } from '../movie-card/movie-card';

// Models
import { Navbar } from '../navbar/navbar';
import { Movie } from '../models/Movie';

// Services
import { MovieService } from '../services/MovieService';
import { WatchListService } from '../services/WatchListService';

@Component({
  selector: 'app-watch-list',
  imports: [MovieCard, Navbar],
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.css'
})
export class WatchList {
  movies: Movie[] = [];

  private movieService = inject(MovieService);
  private watchListService = inject(WatchListService);

  ngOnInit() {
    let ids = this.watchListService.getWatchListIds();
    console.log(ids);

    for (const id of ids) {
      this.movieService.getMovieById(id).subscribe((response: any) => {
        this.movies.push(response);
      });
    }
  }
}
