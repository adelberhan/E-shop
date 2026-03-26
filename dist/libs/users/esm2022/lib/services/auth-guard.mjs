import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorge.service';
import { Router, } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./localstorge.service";
export class AuthGuard {
    constructor(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    canActivate(route, state) {
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
        }
        catch (error) {
            this.localStorageService.removeToken();
        }
        return this.getLoginUrlTree(state.url);
    }
    token_exp(exp) {
        return Math.floor(new Date().getTime() / 1000) >= exp;
    }
    getLoginUrlTree(returnUrl) {
        return this.router.createUrlTree(['/login'], {
            queryParams: { returnUrl },
        });
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUlMLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3pCLE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFlBQ1UsTUFBYyxFQUNkLG1CQUF3QztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDO0lBRUosV0FBVyxDQUNULEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUk7WUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxJQUFJLENBQUM7WUFFakQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDeEQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxTQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7MEVBdkNVLFNBQVM7dUVBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlIsTUFBTTs7dUZBRVAsU0FBUztjQUhyQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JnZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXIsXG4gIFVybFRyZWUsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXRUb2tlbigpO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9naW5VcmxUcmVlKHN0YXRlLnVybCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuRGVjb2RlID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcbiAgICAgIGNvbnN0IGlzVG9rZW5FeHBpcmVkID0gdGhpcy50b2tlbl9leHAodG9rZW5EZWNvZGUuZXhwKTtcbiAgICAgIGNvbnN0IGFkbWluT25seSA9IHJvdXRlLmRhdGE/LmFkbWluT25seSA9PT0gdHJ1ZTtcblxuICAgICAgaWYgKCFpc1Rva2VuRXhwaXJlZCAmJiAoIWFkbWluT25seSB8fCB0b2tlbkRlY29kZS5pc0FkbWluKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnJlbW92ZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9naW5VcmxUcmVlKHN0YXRlLnVybCk7XG4gIH1cblxuICBwcml2YXRlIHRva2VuX2V4cChleHA6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPj0gZXhwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2dpblVybFRyZWUocmV0dXJuVXJsOiBzdHJpbmcpOiBVcmxUcmVlIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy9sb2dpbiddLCB7XG4gICAgICBxdWVyeVBhcmFtczogeyByZXR1cm5VcmwgfSxcbiAgICB9KTtcbiAgfVxufVxuIl19