import * as i0 from "@angular/core";
export declare class UsersFacade {
    private readonly store;
    currentUser$: import("rxjs").Observable<import("@ng-shop/users").User>;
    isAuthenticatedUser$: import("rxjs").Observable<boolean>;
    buildUserSession(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersFacade>;
}
