import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Component, inject, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutStore } from '../../store/layout.store';
import {  NgClass } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    NgClass,
  ],
  styleUrls: ['./sidenav.component.scss'],
  providers: [LayoutStore]
})
export class SidenavComponent implements OnInit {
  layoutStore = inject(LayoutStore);
  media = inject(MediaMatcher);
  mobileQuery!: MediaQueryList;



  ngOnInit() {

    this.layoutStore.initializeTheme();
  }
}
