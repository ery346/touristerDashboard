import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit, OnChanges {
  @Input()newType!: string;
  @Input()serviceData!: any;
  data:any[] = []
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  setSpinner: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private citiesS: CitiesService, private usersS: UsersService, private router: Router) {
  }
  // Opcion 1: los datos vienen desde los componentes city, users (nota: tiene un error no afecta el funcionamiento)
  ngOnChanges(changes: SimpleChanges): void {

    // console.log(changes.serviceData.currentValue.data);
    
    // switch (this.newType) {
    //   case 'City':
    //     changes.serviceData.currentValue.data.forEach((element:any) => {
    //         const id = element.id;
    //         element.attributes.id = id
    //         this.data = [...this.data, element.attributes];
    //        this.setSpinner = false;
    //       });
      
    //       this.dataSource = new MatTableDataSource(this.data);
    //       this.displayedColumns = ['id', 'name', 'timezone', 'created_at', 'updated_at'];
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
      
    //     break;
    
    //     case 'User':
    //       changes.serviceData.currentValue.data.forEach((element:any) => {
    //         const id = element.id;
    //         element.attributes.id = id
    //         this.data = [...this.data, element.attributes];
    //        this.setSpinner = false;
    //       });
      
    //       this.dataSource = new MatTableDataSource(this.data);
    //       this.displayedColumns = ['id', 'name', 'timezone', 'created_at', 'updated_at'];
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
      
    //     break;
    //   default:

    //     break;
    // }

  }
  // Opcion 2: los servicios se inyectan en este componente
  ngOnInit(): void {

    switch (this.newType) {
      case 'City':
        this.citiesS.getCities().subscribe((res:any) => {

          res.data.forEach((element:any) => {
            const id = element.id;
            element.attributes.id = id
            this.data = [...this.data, element.attributes];
           console.log(this.data);
           this.setSpinner = false;
          });
      
          this.dataSource = new MatTableDataSource(this.data);
          this.displayedColumns = ['id', 'name', 'timezone', 'created_at', 'updated_at'];
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
        break;
    
        case 'User':

        break;
      default:

        break;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(id:any){
    console.log(id);
    this.router.navigate([this.newType.toLocaleLowerCase(), id])
    
  }

}


