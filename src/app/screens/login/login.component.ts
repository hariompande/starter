import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, AsyncPipe, ReactiveFormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [],
})
export class LoginComponent {
  store = inject(Store);
  error$ = this.store.select(selectors.loginPage.selectLoginPageError);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
    this.store
      .select(selectors.loginPage.selectLoginPagePending)
      .pipe(takeUntilDestroyed())
      .subscribe((isPending) => {
        if (isPending) {
          this.loginForm.disable();
        } else {
          this.loginForm.enable();
        }
      });
  }

  submit() {
    this.store.dispatch(actions.loginPage.login({ credentials: this.loginForm.value }));
  }
}
