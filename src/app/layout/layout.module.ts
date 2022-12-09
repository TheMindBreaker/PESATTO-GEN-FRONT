import { SidebarComponent } from './sidebar/sidebar.component';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarHeaderComponent } from './bar-header/bar-header.component';


@NgModule({
  declarations: [
    SidebarComponent,
    BarHeaderComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbMenuModule

  ]
})
export class LayoutModule { }
