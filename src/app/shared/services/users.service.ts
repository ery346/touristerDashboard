import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers!:any;
  constructor( private http: HttpClient) {}

  // getProviders(){
  //   return this.http.get(`${environment.apiUrl}/providers`)
  //   .pipe(
  //     map( (res:any) => 
  //       res.data.map( (res:any) => {
  //         let user = res.attributes;
  //         user.id = res.id;
  //         return user;
  //       })
  //     )
  //   )
  // }

  getAdminProviders(idToken: string){
    let headers = new HttpHeaders();  
    this.headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${idToken}` )
 
    return this.http.get(`${environment.apiUrl}/v1/dashboard/providers`, {
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
  getAdminCustomers(idToken:string){
    let headers = new HttpHeaders();  
    this.headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${idToken}` )
 
    return this.http.get(`${environment.apiUrl}/v1/dashboard/customers`, {
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

 
}
