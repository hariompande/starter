import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { bookExistsGuard } from './book-exists.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./screens/books/collection-page/collection-page.component').then((m) => m.CollectionPageComponent),
    data: { title: 'Collection', page: 'collection' },
  },
  {
    path: 'books/find',
    loadComponent: () =>
      import('./screens/books/find-book-page/find-book-page.component').then((m) => m.FindBookPageComponent),
  },
  {
    path: 'books/:id',
    canActivate: [bookExistsGuard],
    loadComponent: () =>
      import('./screens/books/book-details-page/book-details-page.component').then((m) => m.BookDetailsPageComponent),
    data: { title: 'Book details', page: 'collection' },
  },
];
