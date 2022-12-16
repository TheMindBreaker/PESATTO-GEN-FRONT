import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmsRoutingModule } from './gms-routing.module';
import { MapComponent } from './map/map.component';
import {LayoutComponent} from "./layout/layout.component";
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule, NbContextMenuModule, NbIconModule,
    NbInputModule,
    NbLayoutModule, NbListModule,
    NbMenuModule, NbProgressBarModule, NbSearchModule, NbSelectModule,
    NbSidebarModule, NbTableModule, NbTagModule,
    NbUserModule, NbWindowModule,

} from "@nebular/theme";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { DeviceListComponent } from './device-list/device-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { IndexComponent } from './index/index.component';
import { DeviceComponent } from './device/device.component';
import {SocketDeviceService} from "../service/socketDevice";
import {SocketDeviceMapService} from "../service/socketDeviceMap";
import { CommandComponent } from './device/command/command.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LayoutComponent,
    MapComponent,
    DeviceListComponent,
    HeaderComponent,
    IndexComponent,
    DeviceComponent,
    CommandComponent,
    UserListComponent,
    UserComponent,
  ],
  providers: [SocketDeviceService, SocketDeviceMapService],

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
        NbMenuModule,
        NbProgressBarModule,
        NbTagModule,
        NbInputModule,
        ReactiveFormsModule
    ],
  bootstrap: [LayoutComponent]

})
export class GmsModule { }
