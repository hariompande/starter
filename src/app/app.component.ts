import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from './services/lang.service';
import { LayoutComponent } from './features/layout/components/layout/layout.component';
import { ToolbarComponent } from './features/layout/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, LayoutComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starter';
  langService = inject(LangService);
}
