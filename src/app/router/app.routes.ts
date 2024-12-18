import { Routes } from '@angular/router';
import { booksRoutes } from '../screens/books/router/books.router';
import { landingPageRoutes } from '../screens/landing/routes/landing.router';
import { loginRoutes } from '../screens/login/routes/login.routes';

export const routes: Routes = [
  ...loginRoutes,
  ...landingPageRoutes,
  ...booksRoutes
];
