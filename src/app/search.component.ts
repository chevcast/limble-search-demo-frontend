import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule]
})
export class SearchComponent {

  constructor(private router: Router) { }

  onSubmit(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['/loading']);
    }
  }
}
