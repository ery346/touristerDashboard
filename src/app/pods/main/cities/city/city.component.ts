import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../../../shared/services/cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  id!: string;
  cityData: any;
  constructor(private activatedR: ActivatedRoute, private cityS: CitiesService) { }

  ngOnInit(): void {
    let id: string;
    this.activatedR.params.subscribe(({id}) => this.id = id)
     
      this.cityS.getCity(this.id).subscribe((res:any) => {
        this.cityData = res.data
  
      } )
  
  }

}
