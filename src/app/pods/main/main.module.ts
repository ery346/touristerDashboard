import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContainerComponent,
    SidenavComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialComponentsModule
  ]
})
export class MainModule { }
