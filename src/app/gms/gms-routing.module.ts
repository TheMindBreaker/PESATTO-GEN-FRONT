import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {MapComponent} from "./map/map.component";
import {NbSidebarModule} from "@nebular/theme";
import {IndexComponent} from "./index/index.component";
import {DeviceComponent} from "./device/device.component";

const routes: Routes = [
  

  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: "index",
        component: IndexComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'device/:id',
        component: DeviceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbSidebarModule],
  exports: [RouterModule]
})
export class GmsRoutingModule { }
