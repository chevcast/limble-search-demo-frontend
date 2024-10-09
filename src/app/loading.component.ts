import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { SearchResult } from '../types';
import { SearchService } from './search.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  imports: []
})
export class LoadingComponent implements OnInit {
  searchQuery: string = '';

  constructor(private router: Router, private location: Location, private searchService: SearchService) {
    // Retrieve the search query from the navigation state.
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['query']) {
      this.searchQuery = navigation.extras.state['query'];
    } else {
      // If the search query is not found, redirect to the root.
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    // Start the search.
    console.log(`Starting search for: ${this.searchQuery}`);
    this.searchService.startSearch(this.searchQuery).subscribe({
      next: () => {
        console.log('Search started successfully.');
        this.searchService.searchResults$!.subscribe((result: SearchResult | null) => {
          console.log('Received search result:', result);
          // If the search is successful, navigate to the results page.
          switch (result?.status) {
            case 'success':
              if (this.router.url !== '/results') {
                // Navigate to the results page to display initial results.
                console.log('Initial results received. Navigating to results page.');
                this.router.navigate(['/results'], { state: { query: this.searchQuery } });
              }
              break;
            case 'error':
              // Store error and redirect back to root.
              console.error('Search failed:', result.message);
              sessionStorage.setItem('error', result.message);
              this.router.navigate(['']);
              break;
          }
        });
      },
      error: (error: any) => {
        // Store error and redirect back to root.
        console.error('Search failed:', error.message);
        sessionStorage.setItem('error', error.message);
        this.router.navigate(['']);
      }
    });
  }
}
