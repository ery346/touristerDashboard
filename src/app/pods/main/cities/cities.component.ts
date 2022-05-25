import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../../shared/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {
  data:any;
  tableCols:any = ['id', 'name', 'timezone', 'created_at', 'updated_at']
  constructor(private citiesS: CitiesService) { }

  ngOnInit(): void {
    this.citiesS.getCities().subscribe((res:any) => console.log(this.data = res) )
  }

}
