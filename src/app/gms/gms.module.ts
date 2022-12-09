import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GmsRoutingModule } from './gms-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MapComponent } from './map/map.component';
import {LayoutComponent} from "./layout/layout.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule
} from "@nebular/theme";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MenuComponent,
    MapComponent,
    SidebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GmsRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
  ],

})
export class GmsModule { }
