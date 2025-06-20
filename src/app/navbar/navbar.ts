import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() watchlistCount!: number;

  private router = inject(Router);

  searchTerm: string = "";

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search', this.searchTerm.trim()]);
    }
  }
}
