import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as countriesLib from 'i18n-iso-countries';
import { LocalStorageService } from './localstorge.service';
import { Router } from '@angular/router';
import { UsersFacade } from '../state/users.facade';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./localstorge.service";
import * as i3 from "@angular/router";
import * as i4 from "../state/users.facade";
export class UsersService {
    constructor(http, token, router, userFacade) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.userFacade = userFacade;
        this.apiUserUrl = environment.apiUrl + '/users';
    }
    getUsers() {
        return this.http.get(`${this.apiUserUrl}`);
    }
    createUser(user) {
        return this.http.post(`${this.apiUserUrl} `, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiUserUrl}/${userId}`);
    }
    getUser(userId) {
        return this.http.get(`${this.apiUserUrl}/${userId}`);
    }
    updateUser(user) {
        return this.http.put(`${this.apiUserUrl}/${user.id}`, user);
    }
    getCountry(countryKey) {
        return countriesLib.getName(countryKey, 'en');
    }
    getCountries() {
        return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1],
            };
        });
    }
    login(email, password) {
        return this.http.post(`${this.apiUserUrl}/login`, {
            email,
            password,
        });
    }
    logOut() {
        this.token.removeToken();
        this.router.navigate(['/login']);
    }
    initAppSession() {
        this.userFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.userFacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.userFacade.isAuthenticatedUser$;
    }
    static { this.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.UsersFacade)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LocalStorageService }, { type: i3.Router }, { type: i4.UsersFacade }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLN0QsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFDVSxJQUFnQixFQUNoQixLQUEwQixFQUMxQixNQUFjLEVBQ2QsVUFBdUI7UUFIdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQU5qQyxlQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFPeEMsQ0FBQztJQUNKLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQ25CLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQ3BELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZCxPQUFPO2dCQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNaLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLFFBQVEsRUFBRTtZQUN0RCxLQUFLO1lBQ0wsUUFBUTtTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO0lBQzdDLENBQUM7NkVBOURVLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTs7dUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZHVsZXMvdXNlcic7XHJcbmltcG9ydCAqIGFzIGNvdW50cmllc0xpYiBmcm9tICdpMThuLWlzby1jb3VudHJpZXMnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlcnNGYWNhZGUgfSBmcm9tICcuLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcclxuICBhcGlVc2VyVXJsID0gZW52aXJvbm1lbnQuYXBpVXJsICsgJy91c2Vycyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSB0b2tlbjogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHVzZXJGYWNhZGU6IFVzZXJzRmFjYWRlXHJcbiAgKSB7fVxyXG4gIGdldFVzZXJzKCk6IE9ic2VydmFibGU8VXNlcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyW10+KGAke3RoaXMuYXBpVXNlclVybH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIodXNlcjogVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMuYXBpVXNlclVybH0gYCwgdXNlcik7XHJcbiAgfVxyXG4gIGRlbGV0ZVVzZXIodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVzZXJVcmx9LyR7dXNlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4oYCR7dGhpcy5hcGlVc2VyVXJsfS8ke3VzZXJJZH1gKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxVc2VyPihgJHt0aGlzLmFwaVVzZXJVcmx9LyR7dXNlci5pZH1gLCB1c2VyKTtcclxuICB9XHJcbiAgZ2V0Q291bnRyeShjb3VudHJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvdW50cmllc0xpYi5nZXROYW1lKGNvdW50cnlLZXksICdlbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnRyaWVzKCk6IHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoXHJcbiAgICAgIGNvdW50cmllc0xpYi5nZXROYW1lcygnZW4nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KVxyXG4gICAgKS5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGVudHJ5WzBdLFxyXG4gICAgICAgIG5hbWU6IGVudHJ5WzFdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy5hcGlVc2VyVXJsfS9sb2dpbmAsIHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dPdXQoKSB7XHJcbiAgICB0aGlzLnRva2VuLnJlbW92ZVRva2VuKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICB9XHJcblxyXG4gIGluaXRBcHBTZXNzaW9uKCkge1xyXG4gICAgdGhpcy51c2VyRmFjYWRlLmJ1aWxkVXNlclNlc3Npb24oKTtcclxuICB9XHJcblxyXG4gIG9ic2VydmVDdXJyZW50VXNlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJGYWNhZGUuY3VycmVudFVzZXIkO1xyXG4gIH1cclxuICBpc0N1cnJlbnRVc2VyQXV0aCgpIHtcclxuICAgcmV0dXJuIHRoaXMudXNlckZhY2FkZS5pc0F1dGhlbnRpY2F0ZWRVc2VyJDtcclxuICB9XHJcbn1cclxuIl19