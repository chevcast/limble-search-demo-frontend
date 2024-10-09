import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SearchComponent } from './app/search.component';

bootstrapApplication(SearchComponent, appConfig)
  .catch((err) => console.error(err));
