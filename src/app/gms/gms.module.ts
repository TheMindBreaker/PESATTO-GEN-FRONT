import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmsRoutingModule } from './gms-routing.module';
import { MapComponent } from './map/map.component';
import {LayoutComponent} from "./layout/layout.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbContextMenuModule, NbIconModule,
  NbLayoutModule, NbListModule,
  NbMenuModule, NbSearchModule, NbSelectModule,
  NbSidebarModule, NbTableModule,
  NbUserModule, NbWindowModule,

} from "@nebular/theme";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { DeviceListComponent } from './device-list/device-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    LayoutComponent,
    MapComponent,
    DeviceListComponent,
    HeaderComponent,
    IndexComponent,
  ],
  imports: [
    NbWindowModule.forChild(),
    LeafletModule,
    CommonModule,
    GmsRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCardModule,
    NbTableModule,
    NbListModule,
    NbSearchModule,
    NbSelectModule,
    NbIconModule,
    NbContextMenuModule,
    NbSidebarModule,
    NbMenuModule
  ],
  bootstrap: [LayoutComponent]

})
export class GmsModule { }
