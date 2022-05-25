import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data:any;
  tableCols:any = ['id', 'about_me', 'city_id', 'created_at', 'updated_at', 'user_id'];
  constructor(private usersS: UsersService, private authService: AuthService) {}

  ngOnInit(): void {
        this.usersS.getProviders().subscribe((res:any) => this.data = res);
    // this.usersS.getProvider('42').subscribe((res:any) => console.log(res))
  
    
    // this.authService.getIdTokenClaims().subscribe((res:any) => {
    //   let idToken;
    //   idToken = res.__raw
      
    //   this.usersS.getCustomers(idToken).subscribe((res:any) => console.log(res));
     
    // })
  }


}
