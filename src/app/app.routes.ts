import { Routes } from '@angular/router';

// Components
import { Home } from './home/home';
import { MovieDetails } from './movie-details/movie-details';
import { WatchList } from './watch-list/watch-list';
import { SearchResult } from './search-result/search-result';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'movie/:id', component: MovieDetails },
  { path: 'watchlist', component: WatchList},
  { path: 'search/:term', component: SearchResult}
];
