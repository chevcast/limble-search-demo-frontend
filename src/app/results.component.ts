import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  template: `
    <div class="results-container">
      <h2>Search Results</h2>
      <!-- Results will go here -->
    </div>
  `,
  standalone: true,
  imports: []
})
export class ResultsComponent { }
