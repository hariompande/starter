import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as actions from '../store/actions';
import { Credentials } from '../types/user.types';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);
  router = inject(Router);
  dialog = inject(MatDialog);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginPage.login),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map((user) => actions.auth.loginSuccess({ user })),
          catchError((error) => of(actions.auth.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.auth.loginSuccess),
        tap(() => this.router.navigate(['/books/find']))
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.auth.loginRedirect, actions.auth.logout),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  // logoutConfirmation$ = createEffect(() =>
  // this.actions$.pipe(
  // ofType(actions.auth.logoutConfirmation),
  // exhaustMap(() => {
  // const dialogRef = this.dialog.open<LayoutDialogComponent, undefined, boolean>(LayoutDialogComponent);

  // return dialogRef.afterClosed();
  // }),
  // map(result => (result ? actions.auth.logout() : actions.auth.logoutConfirmationDismiss())),
  // ),
  // );

  logoutIdleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.user.idleTimeout),
      map(() => actions.auth.logout())
    )
  );
}
