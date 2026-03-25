import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorge.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = this.localStorageService.getToken();

    if (!token) {
      return this.getLoginUrlTree(state.url);
    }

    try {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      const isTokenExpired = this.token_exp(tokenDecode.exp);
      const adminOnly = route.data?.adminOnly === true;

      if (!isTokenExpired && (!adminOnly || tokenDecode.isAdmin)) {
        return true;
      }
    } catch (error) {
      this.localStorageService.removeToken();
    }

    return this.getLoginUrlTree(state.url);
  }

  private token_exp(exp: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= exp;
  }

  private getLoginUrlTree(returnUrl: string): UrlTree {
    return this.router.createUrlTree(['/login'], {
      queryParams: { returnUrl },
    });
  }
}
