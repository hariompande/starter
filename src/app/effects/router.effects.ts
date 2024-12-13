import { Injectable } from '@angular/core';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from '../store/actions';
import { Router } from '@angular/router';

@Injectable()
export class RouterEffects {
//   navigateToDetailsPage$ = createEffect(
    // () =>
    //   this.actions$.pipe(
        // ofType(actions.vendorAppointment.redirectToVendorDetailPage),
        // tap(value => {
        //   this.router.navigate([`${routerPath.vendorDetails}` + value.detailsId]);
        // }),
    //   ),
    // { dispatch: false },
//   );

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
  ) {}
}
