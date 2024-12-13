import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';

@Injectable()
export class CalendarEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {}

//   calendarEffect$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType(
        // actions.calendar.currentMonth,
    //   ),
    //   withLatestFrom(
        // this.store.select(selectors.calendar.selectCalendarCurrentMonth),
        // this.store.select(selectors.calendar.selectCalendarMode),
    //   ),
    //   map(([, currentMonth, mode]) => {
    //   }),
    // ),
//   );
}
