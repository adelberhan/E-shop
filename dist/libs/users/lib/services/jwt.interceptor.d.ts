import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './localstorge.service';
import * as i0 from "@angular/core";
export declare class JwtInterceptor implements HttpInterceptor {
    private localStorageService;
    constructor(localStorageService: LocalStorageService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JwtInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JwtInterceptor>;
}
