import { Routes } from '@angular/router';
import { SearchInputComponent } from './search-input.component';
import { LoadingComponent } from './loading.component';
import { ResultsComponent } from './results.component';

export const routes: Routes = [
  { path: '', component: SearchInputComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown paths to root.
];
