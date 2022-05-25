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
  constructor( private http: HttpClient, private authService: AuthService ) {}

  getProvider(id: string){
    return this.http.get(`${environment.apiUrl}/providers/${id}`)
    .pipe(
      map( (res:any) => {
          let user = res.data.attributes;
          user.id = res.data.id;
          return user;
      }
      )
    )
  }
  getProviders(){
    return this.http.get(`${environment.apiUrl}/providers`)
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
  getCustomers(idToken:any){
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
