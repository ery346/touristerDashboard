import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../../../shared/services/cities.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  id!: string;
  cityData: any;
  constructor(private activatedR: ActivatedRoute, private cityS: CitiesService, private authS: AuthService) { }

  ngOnInit(): void {
    let id: string;
    this.activatedR.params.subscribe(({id}) => this.id = id)
     

    this.authS.getIdTokenClaims().subscribe((res:any) => {
      let idToken;
      idToken = res.__raw
     
      
      this.cityS.getAdminCitiesById(idToken, this.id).subscribe((res:any) => {
        this.cityData = res.data
      } )
    })
  }

}
