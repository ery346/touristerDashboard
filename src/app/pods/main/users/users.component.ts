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
  tableCols:any = ['id', 'city_id', 'user_id'];
  constructor(private usersS: UsersService, private authService: AuthService) {}

  ngOnInit(): void {
        // this.usersS.getProviders().subscribe((res:any) => this.data = res);
    // this.usersS.getProvider('42').subscribe((res:any) => console.log(res))
  
    
    this.authService.getIdTokenClaims().subscribe((res:any) => {
      let idToken;
      idToken = res.__raw
      
      // contienen los mismos datos y solo tienen get 
      // this.usersS.getAdminCustomers(idToken).subscribe((res:any) => console.log(res));
     
      this.usersS.getAdminProvider(idToken).subscribe((res:any) => this.data = res)
    })
  }


}
