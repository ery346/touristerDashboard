import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginBtnService {
  valueLogin: boolean = false;
  get value(){
    return this.valueLogin;
  }
  constructor() { }

  login(value: boolean){
   this.valueLogin = value;
  }

}
