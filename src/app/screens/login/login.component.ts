import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions';
import { TranslationModule } from '../../translations/translate.module';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, AsyncPipe, ReactiveFormsModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {
  store = inject(Store);
  error$ = this.store.select(selectors.loginPage.selectLoginPageError);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('ngrx'),
    password: new FormControl(''),
  });

  constructor() {
    this.store
      .select(selectors.loginPage.selectLoginPagePending)
      .pipe(takeUntilDestroyed())
      .subscribe((isPending) => {
        isPending ? this.loginForm.disable() : this.loginForm.enable();
      });
  }

  submit() {
    this.store.dispatch(
      actions.loginPage.login({ credentials: this.loginForm.value })
    );
  }
}
