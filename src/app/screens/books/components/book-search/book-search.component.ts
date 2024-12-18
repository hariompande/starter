import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-book-search',
  imports: [TranslateModule],
  templateUrl: './book-search.component.html',
})
export class BookSearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();

  onSearch(event: KeyboardEvent): void {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
