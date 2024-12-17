import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../types/book.types';
import { Store } from '@ngrx/store';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { BookSearchComponent } from '../book-search/book-search.component';
import { AsyncPipe } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-find-book-page',
  imports: [BookSearchComponent, AsyncPipe, BookCardComponent, RouterModule, TranslateModule],
  templateUrl: './find-book-page.component.html',
})
export class FindBookPageComponent {
  store = inject(Store);
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor() {
    this.searchQuery$ = this.store.select(selectors.search.selectSearchQuery);
    this.books$ = this.store.select(selectors.books.selectSearchResults);
    this.loading$ = this.store.select(selectors.search.selectSearchLoading);
    this.error$ = this.store.select(selectors.search.selectSearchError);
  }

  search(query: string) {
    this.store.dispatch(actions.search.searchBooks({ query }));
  }
}
