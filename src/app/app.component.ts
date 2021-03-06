import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginBtnService } from './shared/services/login-btn.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'touristerDashboard';
  get value (){
    return this.loginB.value;
  }
  constructor(public auth: AuthService, private loginB: LoginBtnService){
  }


  ngDoCheck(): void {
    // console.log('docheck', this.value);
    
    if(this.value){
      this.auth.loginWithRedirect();

    }
  }


}
