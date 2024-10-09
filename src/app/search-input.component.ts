import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search-input.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SearchInputComponent implements OnInit {
  searchQuery: string = '';
  error: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.error = sessionStorage.getItem('error') || '';
    sessionStorage.removeItem('error');  // Clear error after showing it once.
  }

  onSubmit() {
    // Navigate to the loading page with the search query.
    this.router.navigate(['/loading'], { skipLocationChange: true, state: { query: this.searchQuery } });
  }
}
