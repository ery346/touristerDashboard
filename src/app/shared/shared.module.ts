import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { SearchTableComponent } from './components/search-table/search-table.component';

@NgModule({
  declarations: [
    SearchTableComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  exports: [
    MaterialComponentsModule,
    SearchTableComponent
  ]
})

export class SharedModule { }
