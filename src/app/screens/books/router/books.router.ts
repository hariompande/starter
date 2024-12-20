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
      import('./../components/find-book-page/find-book-page.component').then((m) => m.FindBookPageComponent),
    canActivate: [authGuard],
  },
  {
    path: 'books/:id',
    canActivate: [bookExistsGuard],
    loadComponent: () =>
      import('./../components/book-details-page/book-details-page.component').then((m) => m.BookDetailsPageComponent),
    data: { title: 'Book details', page: 'collection' },
  },
];
