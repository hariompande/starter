import { Component, inject } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import * as selectors from '../../../store/selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-collection-page',
  imports: [BookCardComponent, RouterModule, TranslateModule, AsyncPipe, JsonPipe],
  templateUrl: './collection-page.component.html',
})
export class CollectionPageComponent {
  store = inject(Store);
  books$ = this.store.select(selectors.collection.selectBookCollection);
}
