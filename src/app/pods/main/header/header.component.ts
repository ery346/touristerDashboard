import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  testBool:boolean = false;
  @Output()open = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(){
    this.testBool = !this.testBool;
   
    this.open.emit(this.testBool);
    
  }
}
