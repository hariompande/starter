import { Routes } from '@angular/router';
import { authGuard } from '../../../router/auth-guard.service';
import { bookExistsGuard } from './book-exists.guard';

export const booksRoutes: Routes = [
  {
    path: 'books',
    loadComponent: () =>
      import('./../components/collection-page/collection-page.component').then((m) => m.CollectionPageComponent),
    data: { title: 'Collection', page: 'collection' },
  },
  {
    path: 'books/find',
    loadComponent: () =>
      import('./../components/book-details-page/book-details-page.component').then((m) => m.BookDetailsPageComponent),
    canActivate: [authGuard],
  },
  {
    path: 'books/:id',
    canActivate: [bookExistsGuard, authGuard],
    loadComponent: () =>
      import('./../components/book-details/book-details.component').then((m) => m.BookDetailsComponent),
    data: { title: 'Book details', page: 'collection' },
  },
];
