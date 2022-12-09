import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'layout-pages',
  styleUrls: ['layout.component.scss'],
  templateUrl: './layout.component.html',
})

export class LayoutComponent {
  items: NbMenuItem[] = [];
  constructor(private sidebarService: NbSidebarService){

    this.items = [
          {
            title: 'Generadores',
            url: '/gms',
            icon: 'npm-outline',

          },
          {
            title: 'Mapa',
            url: '/gms/map',
            icon: 'map-outline',


          },
         
    ];
  }
  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

}
