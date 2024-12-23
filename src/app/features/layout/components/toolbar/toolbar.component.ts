import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutStore } from '../../store/layout.store';
import { Store } from '@ngrx/store';
import { selectors } from '../../../../store';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  providers: [LayoutStore],
})
export class ToolbarComponent {
  store = inject(Store);
  isLoggedIn = this.store.select(selectors.auth.selectLoggedIn);
  layoutStore = inject(LayoutStore);

  onLogout() {
    // Implement logout logic
    console.log('Logout clicked');
  }

  toggleTheme() {
    this.layoutStore.toggleTheme();
  }

  changeSideNaveVisibility() {
    this.layoutStore.changeSideNavVisibility();
  }
}
