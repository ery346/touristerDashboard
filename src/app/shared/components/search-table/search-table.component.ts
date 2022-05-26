import { Component, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBodyComponentComponent } from '../dialog-body-component/dialog-body-component.component';
import { CitiesService } from '../../services/cities.service';
import { AuthService } from '@auth0/auth0-angular';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnChanges{
  tableDataSrc: any;
  @Input()newType!: string;
  @Input()infoData!: any;
  @Input('tableColums') tableCols!: any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
 
  setSpinner: boolean = true;

  constructor( public dialog: MatDialog, 
               private cityS: CitiesService,
               private authS: AuthService) { }
  
  ngOnChanges(changes: SimpleChanges): void {

    if (this.infoData) {
      this.setSpinner = false;
      this.tableDataSrc = new MatTableDataSource(this.infoData);
      this.tableDataSrc.sort = this.sort;
      this.tableDataSrc.paginator = this.paginator;
    }
  }
  
  applyFilter(event:any){
        const filterValue = (event.target as HTMLInputElement).value;
        this.tableDataSrc.filter = filterValue.trim().toLowerCase();

        if (this.tableDataSrc.paginator) {
        this.tableDataSrc.paginator.firstPage();
    }
  }

  openDialogNewCity() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
     
    this.dialog.open(DialogBodyComponentComponent,{
      autoFocus: true,
      disableClose: true,
      width: '400px',
      data: {
        title:'Create a new city',
        actionButton: 'Create',
        deleteButton: false
      }
    } );
  }
  openDialogEditDelete(id: string){
   
    this.authS.getIdTokenClaims().subscribe((res:any) => {
      let idToken;
      idToken = res.__raw
      
      this.cityS.getAdminCitiesById(idToken, id).subscribe((res:any) =>  {
        let dataCity;
        dataCity = res;
        
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
     
        this.dialog.open(DialogBodyComponentComponent,{
          autoFocus: true,
          disableClose: true,
          width: '400px',
          data: {
            title:'Edit or delete the city',
            actionButton: 'Edit',
            deleteButton: true,
            name: dataCity.name,
            createdAt: dataCity.created_at,
            timezone: dataCity.timezone,
            updatedAt: dataCity.updated_at
          }
        } );
        
      } );
     
      
    })
   
    }
}

