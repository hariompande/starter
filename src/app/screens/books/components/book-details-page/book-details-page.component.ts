import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, combineLatest, take } from 'rxjs';

import * as actions from '../../../../store/actions';
import * as selectors from '../../../../store/selectors';
import { Book } from '../../../../types/book.types';
import { AsyncPipe, NgClass } from '@angular/common';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-details-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, AsyncPipe, BookDetailsComponent],
  templateUrl: './book-details-page.component.html',
})
export class BookDetailsPageComponent {
  store = inject(Store);
  book$ = this.store.select(selectors.books.selectSelectedBook) as Observable<Book>;

  isSelectedBookInCollection$ = this.store.select(selectors.collection.isSelectedBookInCollection);

  onClick() {
    combineLatest([this.book$, this.isSelectedBookInCollection$])
      .pipe(take(1))
      .subscribe(([book, isSelectedBookInCollection]) => {
        if (!isSelectedBookInCollection) {
          this.store.dispatch(actions.books.addBook({ book }));
        } else {
          this.store.dispatch(actions.books.removeBook({ book }));
        }
      });
  }
}
