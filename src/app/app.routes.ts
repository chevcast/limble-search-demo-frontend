import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { LoadingComponent } from './loading.component';
import { ResultsComponent } from './results.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'search', component: ResultsComponent }
];
