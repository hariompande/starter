import { Component, inject } from '@angular/core';
import { BookSearchComponent } from '../book-search/book-search.component';
import { BookCardComponent } from '../book-card/book-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BookStore } from '../../store/book.store';

@Component({
  selector: 'app-find-book-page',
  imports: [BookSearchComponent, BookCardComponent, RouterModule, TranslateModule],
  templateUrl: './find-book-page.component.html',
  providers: [BookStore],
})
export class FindBookPageComponent {
  bookStore = inject(BookStore);
}
