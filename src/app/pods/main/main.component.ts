import { MediaMatcher } from '@angular/cdk/layout';
import {  Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  btnOpen: boolean = false;
  mobileQuery!: MediaQueryList;
  example:any
  constructor(private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  
  ngOnInit(): void {}

  statusSidebar(status: boolean){
    this.btnOpen = status;
  }


}
