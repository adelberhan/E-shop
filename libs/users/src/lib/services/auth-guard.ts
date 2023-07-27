import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorge.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.localStorageService.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode.isAdmin && !this.token_exp(tokenDecode.exp)) {
        return true;
        // console.log(tokenDecode)
      }
    }
    this.router.navigate(['/login']);

    return false;
  }

  private token_exp(exp: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= exp;
  }
}
