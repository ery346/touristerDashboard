import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.hasAuth();
  }

  hasAuth(){
    const localS = localStorage.getItem('@@auth0spajs@@::4UV0jyXuBnsNhxOrAly9wvKw1u3h62w9::default::openid profile email offline_access');
    if(localS === null){
      console.log(false, localS);
      this.router.navigate(['auth']); 
      return  false;
    } else{
      console.log(true, localS);
      return true;
    }
  }
}
