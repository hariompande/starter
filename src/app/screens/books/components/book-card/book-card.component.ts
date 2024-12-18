import { Component, Input } from '@angular/core';
import { EllipsisPipe } from '../../../../shared/pipes/ellipsis.pipe';
import { get } from 'lodash-es';
import { Book } from '../../../../types/book.types';

@Component({
  selector: 'app-book-card',
  imports: [EllipsisPipe],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  @Input() book: Partial<Book> = {};

  get id(): string {
    return get(this.book, 'id', '');
  }

  get title(): string {
    return get(this.book, 'volumeInfo.title', '');
  }

  get subtitle(): string {
    return get(this.book, 'volumeInfo.subtitle', '');
  }

  get description(): string {
    return get(this.book, 'volumeInfo.description', '');
  }

  get thumbnail(): string {
    return get(this.book, 'volumeInfo.imageLinks.smallThumbnail', '').replace('http:', '');
  }

  get authors(): string[] {
    return get(this.book, 'volumeInfo.authors', []);
  }
}
