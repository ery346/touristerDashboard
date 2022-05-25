import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { LoginBtnService } from 'src/app/shared/services/login-btn.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogedGuard implements CanActivate {
  // get auth2(){
  //   return this.authS.AuthenticationGuard
  // }
  auth2: boolean = false;
  constructor(private authS: LoginBtnService,private router: Router, private auth: AuthService){
    // console.log(this.auth2);

    this.auth.isAuthenticated$.subscribe((res:any) => {
      this.auth2 = res;   
      console.log(res);
      
    })
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    //  if (this.auth2) {
    //   // this.router.navigateByUrl('/auth');
    //   console.log(this.auth2);
    //   // return true
    //  }else{
    //   console.log(this.auth2);
    //   //  return false
     
    //  }

     return true
  }
  
}
