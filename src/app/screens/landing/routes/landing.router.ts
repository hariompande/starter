import { Routes } from '@angular/router';

export const landingPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./../components/landing/landing.component').then((m) => m.LandingComponent),
    data: { title: 'Collection', page: 'collection' },
  },
];
