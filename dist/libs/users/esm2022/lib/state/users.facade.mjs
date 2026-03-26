import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import * as i0 from "@angular/core";
export class UsersFacade {
    constructor() {
        this.store = inject(Store);
        this.currentUser$ = this.store.pipe(select(UsersSelectors.getUser));
        this.isAuthenticatedUser$ = this.store.pipe(select(UsersSelectors.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(UsersActions.buildUserSession());
    }
    static { this.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersFacade, factory: UsersFacade.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersFacade, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3N0YXRlL3VzZXJzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEtBQUssWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxjQUFjLE1BQU0sbUJBQW1CLENBQUM7O0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRW1CLFVBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsaUJBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QseUJBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBTzlFO0lBSEMsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzRFQVZVLFdBQVc7dUVBQVgsV0FBVyxXQUFYLFdBQVc7O3VGQUFYLFdBQVc7Y0FEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgVXNlcnNBY3Rpb25zIGZyb20gJy4vdXNlcnMuYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIFVzZXJzU2VsZWN0b3JzIGZyb20gJy4vdXNlcnMuc2VsZWN0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJzRmFjYWRlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0b3JlID0gaW5qZWN0KFN0b3JlKTtcclxuXHJcbiAgY3VycmVudFVzZXIkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRVc2VyKSk7XHJcbiAgaXNBdXRoZW50aWNhdGVkVXNlciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFVzZXJJc0F1dGgpKTtcclxuXHJcblxyXG4gIFxyXG4gIGJ1aWxkVXNlclNlc3Npb24oKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFVzZXJzQWN0aW9ucy5idWlsZFVzZXJTZXNzaW9uKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=