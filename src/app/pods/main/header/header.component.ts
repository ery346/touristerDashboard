import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, DoCheck } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginBtnService } from 'src/app/shared/services/login-btn.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  testBool:boolean = false;
  hasAuthentication!: boolean;
  imgProfile: string = '';
  @Output()openSidenav = new EventEmitter<boolean>();
  constructor(private auth: AuthService, 
              @Inject(DOCUMENT) private doc: Document,
              private loginB: LoginBtnService) { }
  ngDoCheck(): void {
    this.auth.isAuthenticated$.subscribe((res:any) => {
      // if(res){
      //   this.hasAuthentication = true;
      // }else{
      //   this.hasAuthentication = false;
      // }
      this.hasAuthentication = res;
    }) 
  
  }

  ngOnInit(): void {
      this.auth.user$.subscribe((res:any) => {
        this.imgProfile = res.picture;
      })
    
   
  }

  openSidebar(){
    this.testBool = !this.testBool;
    this.openSidenav.emit(this.testBool);
  }

  login(){
    this.loginB.login(true)
  }

  logout(){
    this.auth.logout({returnTo: this.doc.location.origin})
  }
}
