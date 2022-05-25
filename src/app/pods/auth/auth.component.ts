import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginBtnService } from 'src/app/shared/services/login-btn.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private loginB: LoginBtnService) { }

  ngOnInit(): void {
    // this.loginB.login(true);
        this.auth.loginWithRedirect();
  }

}
