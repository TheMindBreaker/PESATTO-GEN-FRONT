import { Component } from '@angular/core';
import {NbMenuItem, NbPosition, NbSidebarService} from '@nebular/theme';
import {NbAuthService} from "@nebular/auth";


@Component({
  selector: 'layout-pages',
  styleUrls: ['layout.component.scss'],
  templateUrl: './layout.component.html',
  styles: [`
    :host nb-layout-header ::ng-deep nav {
      justify-content: flex-end;
    }

    :host nb-layout-header button:last-child .btn-user {
      margin-right: auto;
    }
  `],
})

export class LayoutComponent {
  items = [{ title: 'Profile', link:'' }, { title: 'Log out', link: './auth/logout' }];
  auth?: NbAuthService;
  menu : NbMenuItem[] = [
    {
      title: "home",
      link: '/gms/index',
      icon: 'home',
    },
    {
      title: "dashboard",
      link: '/gms/map',
      icon: 'map',
    }
  ];
  constructor(private sidebarService: NbSidebarService, authService: NbAuthService){
  }

  toggle() {
    this.sidebarService.toggle(true, 'main');
  }

}
