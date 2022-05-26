import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileArr: any[] = [];
  constructor(public auth: AuthService,@Inject(DOCUMENT) private doc: Document, ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((res:any) => {
      this.profileArr = [res]
      console.log(res);
      
    })
  }

  logout(){
    this.auth.logout({returnTo: this.doc.location.origin})
  }

}
