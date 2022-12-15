import { Component } from '@angular/core';
import { NbMenuItem, NbPosition, NbSidebarService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';


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
  userModule: any = {
    title: "Usuarios",
    link: '/gms/users',
    icon: 'people',

  };

  user: { email: string; name: string; id: string; role: string; } = {
    email: '',
    name: '',
    id: '',
    role: ''
  };
  items = [{ title: 'Profile', link: '' }, { title: 'Log out', link: './auth/logout' }];
  auth?: NbAuthService;

  menu: NbMenuItem[] = [
    {
      title: "home",
      link: '/gms/index',
      icon: 'home',
    },
    {
      title: "dashboard",
      link: '/gms/map',
      icon: 'map',
    },

  ];

  constructor(private sidebarService: NbSidebarService, private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        }
        if (this.user.role === 'admin') {
          this.menu.push({
            title: "Usuarios",
            link: '/gms/users',
            icon: 'people',
          });

        }


      });
  }

  toggle() {
    this.sidebarService.toggle(true, 'main');
  }

}
