import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  headers!:any;
  constructor(private http: HttpClient) { }

  // getCities (){
  //   return this.http.get(`${environment.apiUrl}/cities`).pipe(
  //     map( (res:any) => 
  //       res.data.map( (res:any) => {
  //         let user = res.attributes;
  //         user.id = res.id;
  //         return user;
  //       })
  //     )
  //   )
  // }

  // getCity(id: string){
  //   return this.http.get(`${environment.apiUrl}/cities/${id}`);
  // }


  getAdminCities(idToken:string){
    let headers = new HttpHeaders();  
    this.headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${idToken}` )
 
    return this.http.get(`${environment.apiUrl}/v1/dashboard/cities`, {
      headers: this.headers,
    })
    .pipe(
      map( (res:any) =>
        res.data.map( (res:any) => {
          let user = res.attributes;
          user.id = res.id;
          return user;
        })
      )
    )
  }
  getAdminCitiesById(idToken:string, idCity:string){
    let headers = new HttpHeaders();  
    this.headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${idToken}` )
 
    return this.http.get(`${environment.apiUrl}/v1/dashboard/cities/${idCity}`, {
      headers: this.headers,
    }) .pipe(
      map( (res:any) =>{
        return res.data.attributes
      })
    )
  }

  postAdminCities(idToken:string, newCity:any){
    let headers = new HttpHeaders();  
    this.headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${idToken}` )
 
    return this.http.post(`${environment.apiUrl}/v1/dashboard/cities`, newCity, {
      headers: this.headers,
    });
  }
}
