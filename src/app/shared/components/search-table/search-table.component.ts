import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements  OnChanges{
  tableDataSrc: any;
  @Input()newType!: string;
  @Input()infoData!: any;
  @Input('tableColums') tableCols!: any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  setSpinner: boolean = true;

  constructor( private router: Router) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSrc = new MatTableDataSource(this.infoData);
    this.tableDataSrc.sort = this.sort;
    this.tableDataSrc.paginator = this.paginator;
    if (this.infoData) {
      this.setSpinner = false;
    }
  }
  
  applyFilter(event:any){
        const filterValue = (event.target as HTMLInputElement).value;
        this.tableDataSrc.filter = filterValue.trim().toLowerCase();

        if (this.tableDataSrc.paginator) {
        this.tableDataSrc.paginator.firstPage();
    }
  }

  // city(id:any){
  //   console.log(id);
  //   this.router.navigate([this.newType.toLocaleLowerCase(), id])
    
  // }

}


