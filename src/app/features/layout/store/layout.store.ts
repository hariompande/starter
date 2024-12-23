import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const LayoutStore = signalStore(
  { providedIn: 'root' },
  withState({
    sideNavTitle: '' as string,
    sideNavListItems: [
      {
        routeName: 'dashboard',
        routeLink: '/dashboard',
        routeIcon: 'dashboard',
        routeTitle: 'Dashboard',
        routeActive: false,
      },
      {
        routeName: 'tree',
        routeLink: '/tree',
        routeIcon: 'tree',
        routeTitle: 'Tree',
        routeActive: false,
      },
      {
        routeName: 'table',
        routeLink: '/table',
        routeIcon: 'table',
        routeTitle: 'Table',
        routeActive: false,
      },
    ],
    sideNavActive: false as boolean,
    darkMode: false,
  }),
  withMethods((store) => {
    return {
      toggleTheme() {
        patchState(store, { darkMode: !store.darkMode() });
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      },
      initializeTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          patchState(store, { darkMode: true });
          document.documentElement.classList.add('dark');
        } else {
          patchState(store, { darkMode: false });
          document.documentElement.classList.remove('dark');
        }
      },
      changeSideNavVisibility() {
        patchState(store, { sideNavActive: !store.sideNavActive() });
      },
    };
  })
);
