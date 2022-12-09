import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmsRoutingModule } from './gms-routing.module';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {LayoutComponent} from "./layout/layout.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule,
  
} from "@nebular/theme";
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
    
  
  ],
  bootstrap: [LayoutComponent]

})
export class GmsModule { }
