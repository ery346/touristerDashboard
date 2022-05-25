import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities (){
    return this.http.get(`${environment.apiUrl}/cities`).pipe(
      map( (res:any) => 
        res.data.map( (res:any) => {
          let user = res.attributes;
          user.id = res.id;
          return user;
        })
      )
    )
  }

  getCity(id: string){
    return this.http.get(`${environment.apiUrl}/cities/${id}`);
  }
}
