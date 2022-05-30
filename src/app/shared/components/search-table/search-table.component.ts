import { Component, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { DialogBodyComponentComponent } from '../dialog-body-component/dialog-body-component.component';
import { CitiesService } from '../../services/cities.service';
import { AuthService } from '@auth0/auth0-angular';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { UsersService } from '../../services/users.service';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent {
  tableDataSrc: any;
  @Input()newType!: string;
  @Input()infoData!: any;
  @Input('tableColums') tableCols!: any;

  // @ViewChild(MatSort, {static: true}) sort!: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
 
  setSpinner: boolean = true;
  // //////////////////////////

  displayedCitiesColumns: string[] = ['id', 'name', 'timezone', 'created_at', 'updated_at', 'edit', 'delete'];
  displayedUsersColumns: string[] = ['id', 'city_id', 'user_id'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 
  constructor( public dialog: MatDialog, 
               private cityS: CitiesService,
               private usersS: UsersService,
               private authS: AuthService,
               private route: Router,
               private authService: AuthService,) { }
             
  
  ngOnChanges(changes: SimpleChanges): void {

    switch (this.newType) {
      case 'City':
        this.authService.getIdTokenClaims().subscribe((res:any) => {
          let idToken;
          idToken = res.__raw
          this.cityS.getAdminCities(idToken).subscribe((res:any) =>  {
            this.setSpinner = false;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } );
        })
        break;
    
        case 'User':
          this.authService.getIdTokenClaims().subscribe((res:any) => {
            let idToken;
            idToken = res.__raw
            this.usersS.getAdminCustomers(idToken).subscribe((res:any) => {
              this.setSpinner = false;
              console.log(res);
              
              this.dataSource = new MatTableDataSource(res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })
      
          })
          break;
      default:
        break;
    }

    // if (this.infoData) {
    //   this.setSpinner = false;
    //   this.tableDataSrc = new MatTableDataSource(this.infoData);
    //   this.tableDataSrc.sort = this.sort;
    //   this.tableDataSrc.paginator = this.paginator;
    // }
  }
  
  applyFilter(event:any){
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }
  openDialogNewCity() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
     
    this.dialog.open(DialogBodyComponentComponent,{
      autoFocus: true,
      disableClose: true,
      width: '350px',
      data: {
        title:'Create a new city',
        actionButton: 'Create',
      }
    } );
  }
  openDialogEditCity(id: string){
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
            title:'Edit the city',
            actionButton: 'Edit',
            name: dataCity.name,
            createdAt: dataCity.created_at,
            timezone: dataCity.timezone,
            updatedAt: dataCity.updated_at,
            id
          }
        } );
        
      } );
      
    })
   
    }
  openDialogDelete(id: string,name:string){
    this.dialog.open(DialogDeleteComponent,{
      autoFocus: true,
      disableClose: true,
      width: '400px',
      data: {
        title:`Are you sure you want to delete ${name} city? `,
        id,
      }
    } );
    
  }

  onClick(id:string){
    this.route.navigate(['user', id])
    
  }
}

