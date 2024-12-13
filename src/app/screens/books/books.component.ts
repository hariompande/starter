import { Component, inject } from '@angular/core';
import { provideState, Store } from '@ngrx/store';
import { selectors } from '../../store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [AsyncPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  providers: [
  ]
})
export class BooksComponent {
  store = inject(Store);

  storeValues$ = this.store.select(selectors.books.selectBookingProductId);
}
