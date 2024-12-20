import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  imports: [TranslateModule, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
