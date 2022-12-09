import { Component } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";


@Component({
  selector: 'layout-pages',
  styleUrls: ['layout.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header subheader fixed>
        <nb-action icon="grid-outline" (click)="toggle()"></nb-action>
        <layout-sidebar></layout-sidebar>
      </nb-layout-header>
      <nb-sidebar left tag="left">
      </nb-sidebar>
      <nb-layout-column><router-outlet></router-outlet></nb-layout-column>
    </nb-layout>
  `,
})
export class LayoutComponent {
  constructor(private sidebarService: NbSidebarService) {
  }
  toggle() {
    this.sidebarService.toggle(true, 'left');
  }
}
