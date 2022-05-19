
import { Component, OnInit } from '@angular/core';
import { LoginBtnService } from 'src/app/shared/services/login-btn.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private loginB: LoginBtnService) {

  }
  ngOnInit(): void {
  
  }

  login(){
    this.loginB.login(true);
  }
 
}
