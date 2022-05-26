import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitiesComponent,
    
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CitiesModule { }
