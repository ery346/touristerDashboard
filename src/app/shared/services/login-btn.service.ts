import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginBtnService {
  valueLogin: boolean = false;
  hasAuth!: boolean;
  get value(){
    return this.valueLogin;
  }
  get AuthenticationGuard(){
    return this.hasAuth;
  }
  constructor(private auth: AuthService){
    // this.auth.isAuthenticated$.subscribe((res:any) => {
    //   this.hasAuth = res;   
    //   console.log(res);
      
    // })
  }

  login(value: boolean){
    if(value){
      this.valueLogin = value;
      setTimeout(() => {
        this.valueLogin = false;
      }, 100);
    }
  }

}
