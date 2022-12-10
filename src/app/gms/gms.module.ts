import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmsRoutingModule } from './gms-routing.module';
import { MapComponent } from './map/map.component';
import {LayoutComponent} from "./layout/layout.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbTableModule,
  NbUserModule,

} from "@nebular/theme";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
@NgModule({
  declarations: [
    LayoutComponent,
    MapComponent,
  ],
  imports: [
    LeafletModule,
    CommonModule,
    GmsRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCardModule,
    NbTableModule,


  ],
  bootstrap: [LayoutComponent]

})
export class GmsModule { }
