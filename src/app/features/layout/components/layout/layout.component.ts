import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LayoutStore } from '../../store/layout.store';

@Component({
  selector: 'app-layout',
  imports: [NgClass],
  templateUrl: './layout.component.html',
  providers: [LayoutStore],
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);
}
