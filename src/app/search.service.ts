import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../types/Product.type';
import { SearchResult } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private socket?: Socket;
  private searchResultsSubject?: BehaviorSubject<SearchResult | null>;
  public searchResults$?: Observable<SearchResult | null>;

  constructor(private http: HttpClient) { }

  startSearch(query: string): Observable<any> {
    // Disconnect previous socket connection if it exists.
    this.socket?.disconnect();
    // Complete previous search results subject if it exists.
    this.searchResultsSubject?.complete();
    // Create a new BehaviorSubject to store search results.
    this.searchResultsSubject = new BehaviorSubject<SearchResult | null>(null);
    // Expose the BehaviorSubject as an Observable.
    this.searchResults$ = this.searchResultsSubject.asObservable();
    // Connect to the backend using WebSocket transport.
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });

    // Listen for 'search' events from the backend.
    this.socket.on('search', (result: SearchResult) => {
      // Plumb search result through our BehaviorSubject.
      this.searchResultsSubject!.next(result);
    });

    // Make a POST request to initiate the search.
    return this.http.post('http://localhost:3000/startSearch', { query })
      .pipe(catchError(this.handleError));
  }

  handleError = (error: any) => {
    return throwError(() => error);
  }
}
