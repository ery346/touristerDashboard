import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { SearchTableComponent } from './components/search-table/search-table.component';
import { DialogBodyComponentComponent } from './components/dialog-body-component/dialog-body-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    SearchTableComponent,
    DialogBodyComponentComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialComponentsModule,
    SearchTableComponent,
    DialogBodyComponentComponent
  ]
})

export class SharedModule { }
