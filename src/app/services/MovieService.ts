import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/Movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiKey = 'd920408db10e869cede2f5a9c345adc9';
  private baseUrl = 'https://api.themoviedb.org/3';
  private options = '&include_adult=false&sort_by=popularity.desc';

  constructor(private http: HttpClient) {}

  getNowPlayingMovies(pgNum: number) {
    return this.http.get<{ movies: Movie[] }>(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}${this.options}&page=${pgNum}`);
  }
}
