import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  data:any;
  constructor(private usersS: UsersService) {
    
  }
  ngOnInit(): void {
    this.usersS.getUsers().subscribe((res:any) => this.data = res)
  }


}
