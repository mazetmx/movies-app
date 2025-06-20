import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Models
import { Movie } from './models/Movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
