import { Component } from '@angular/core';
import { LayoutStore } from '../../store/layout.store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  providers: [LayoutStore],
})
export class LayoutComponent {}
