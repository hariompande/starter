import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { bookExistsGuard } from './book-exists.guard';
import { authGuard } from './auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/landing/landing/landing.component').then((m) => m.LandingComponent),
    data: { title: 'Books that inspire', page: 'landing' },
  },
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
    canActivate: [authGuard],
  },
  {
    path: 'books/:id',
    canActivate: [bookExistsGuard, authGuard],
    loadComponent: () =>
      import('./screens/books/book-details-page/book-details-page.component').then((m) => m.BookDetailsPageComponent),
    data: { title: 'Book details', page: 'collection' },
  },
];
