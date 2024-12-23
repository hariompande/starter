import { Routes } from '@angular/router';

export const loginRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./../components/login/login.component').then((m) => m.LoginComponent),
  },
];
