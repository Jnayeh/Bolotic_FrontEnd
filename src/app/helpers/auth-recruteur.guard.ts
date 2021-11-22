import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../api/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRecruteurGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenService.currentToken();
    const decodedToken= this.tokenService.decodedToken();
    if (token && decodedToken.role=="recruteur") {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/LogIn'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
