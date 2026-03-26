import { LocalStorageService } from './localstorge.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private router;
    private localStorageService;
    constructor(router: Router, localStorageService: LocalStorageService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree;
    private token_exp;
    private getLoginUrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
