import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product, SearchResult } from '../types';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ResultsComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Product[] = [];
  filteredResults: Product[] = [];
  isLoading: boolean = true; // Track if results are still coming.

  // Filtering options.
  brands: string[] = [];
  selectedBrand: string = '';
  priceRange: number = 5000;
  inStockOnly: boolean = false;
  selectedQuantity: number = 0;

  constructor(private router: Router, private searchService: SearchService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['query']) {
      this.searchQuery = navigation.extras.state['query'];
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    // If we don't have an observable then we've lost state due to hot reloading. Navigate home.
    if (!this.searchService.searchResults$) {
      this.router.navigate(['']);
      return;
    }

    // Subscribe to search results.
    this.searchService.searchResults$.subscribe((result: SearchResult | null) => {
      if (result === null) return;
      switch (result.status) {
        case 'loading':
          // Display loading graphic if more results are potentially inbound.
          this.isLoading = true;
          break;
        case 'success':
          // Concat new results to existing results and apply filters.
          this.searchResults = [...this.searchResults, ...result.data];
          this.applyFilters();
          break;
        case 'complete':
          // If complete then disable loading graphic.
          this.isLoading = false;
          break;
      }
    });
  }

  applyFilters() {
    // Apply all filters: branc, price, inStock, and quantity.
    this.filteredResults = this.searchResults.filter((item) => {
      const matchesBrand = !this.selectedBrand || item.brand === this.selectedBrand;
      const matchesPrice = item.price <= this.priceRange;
      const matchesStock = this.inStockOnly ? item.inStock : true;
      const matchesQuantity = item.quantity >= this.selectedQuantity;
      return matchesBrand && matchesPrice && matchesStock && matchesQuantity;
    });

    // Extract brand options from full search results.
    const brandSet = new Set(this.searchResults.map((item) => item.brand));
    // Sort brands alphabetically.
    this.brands = Array.from(brandSet).sort();
  }

  // Highlight the search query in the text.
  highlightText(text: string): string {
    if (!this.searchQuery) return text;
    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  goBack() {
    this.router.navigate(['']);
  }
}
