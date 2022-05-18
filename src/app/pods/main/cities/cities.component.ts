import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../../shared/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {
  data:any;
  constructor(private citiesS: CitiesService) { }

  ngOnInit(): void {
    this.citiesS.getCities().subscribe((res:any) =>{
      this.data = res;

      
    })
  }

}
