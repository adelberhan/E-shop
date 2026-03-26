import * as i0 from "@angular/core";
export declare class LocalStorageService {
    constructor();
    setToken(data: string): void;
    getToken(): string;
    removeToken(): void;
    isValidToken(): boolean;
    private token_exp;
    getIdFromToken(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageService>;
}
