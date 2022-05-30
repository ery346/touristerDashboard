import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { CitiesService } from '../../../shared/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {
  data:any;
  tableCols:any = ['id', 'name', 'timezone', 'created_at', 'updated_at']
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    timezone: ['', [Validators.required]]
  })
  constructor(private citiesService: CitiesService, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.authService.getIdTokenClaims().subscribe((res:any) => {
      let idToken;
      idToken = res.__raw
      this.citiesService.getAdminCities(idToken).subscribe((res:any) =>  this.data = res );
    })
  }

  createCity(){
    console.log(this.myForm.valid);
    
  }


}
