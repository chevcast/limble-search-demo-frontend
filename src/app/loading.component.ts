import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  imports: []
})
export class LoadingComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    // Simulate a 7-second loading time, then navigate to the results page
    setTimeout(() => {
      this.router.navigate(['/search']);
    }, 7000);
  }
}
