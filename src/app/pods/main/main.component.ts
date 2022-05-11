import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  btnOpen: boolean = false;
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(private changeDetectorRef: ChangeDetectorRef,private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
   
  }

  statusSidebar(status: boolean){
    this.btnOpen = status;
    console.log(this.btnOpen);
  }


}
