import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {MapComponent} from "./map/map.component";
import {NbSidebarModule} from "@nebular/theme";

const routes: Routes = [
  
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: 'map',
        component: MapComponent
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbSidebarModule],
  exports: [RouterModule]
})
export class GmsRoutingModule { }
