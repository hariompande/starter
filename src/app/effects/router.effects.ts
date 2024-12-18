import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { concatLatestFrom } from '@ngrx/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { routerNavigatedAction, routerNavigationAction } from '@ngrx/router-store';

import * as selectors from '../store/selectors';
import * as actions from '../store/actions';

@Injectable()
export class RouterEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  titleService = inject(Title);

  updateTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigatedAction),
        concatLatestFrom(() => this.store.select(selectors.router.selectRouteData)),
        map(([, data]) => `BookVista - ${data['title']}`),
        tap((title) => this.titleService.setTitle(title))
      ),
    {
      dispatch: false,
    }
  );

  initCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigationAction),
      withLatestFrom(
        this.store.select(selectors.router.selectCurrentPage),
        this.store.select(selectors.collection.selectCollectionLoaded)
      ),
      filter(([, page, loaded]) => page === 'collection' && !loaded),
      map(() => actions.collection.init())
    )
  );

  setSelectedBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerNavigationAction),
      withLatestFrom(
        this.store.select(selectors.router.selectCurrentPage),
        this.store.select(selectors.router.selectRouteParam('id'))
      ),
      filter(([, page, id]) => page === 'collection' && !!id),
      tap(([, page, id]) => console.log(page, id)),
      map(([, , id]) => actions.books.selectBook({ id: id as string }))
    )
  );
}
