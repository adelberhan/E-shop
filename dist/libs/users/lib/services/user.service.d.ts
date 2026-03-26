import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modules/user';
import { LocalStorageService } from './localstorge.service';
import { Router } from '@angular/router';
import { UsersFacade } from '../state/users.facade';
import * as i0 from "@angular/core";
export declare class UsersService {
    private http;
    private token;
    private router;
    private userFacade;
    apiUserUrl: string;
    constructor(http: HttpClient, token: LocalStorageService, router: Router, userFacade: UsersFacade);
    getUsers(): Observable<User[]>;
    createUser(user: User): Observable<User>;
    deleteUser(userId: string): Observable<any>;
    getUser(userId: string): Observable<User>;
    updateUser(user: User): Observable<User>;
    getCountry(countryKey: string): string;
    getCountries(): {
        id: string;
        name: string;
    }[];
    login(email: string, password: string): Observable<User>;
    logOut(): void;
    initAppSession(): void;
    observeCurrentUser(): Observable<User>;
    isCurrentUserAuth(): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersService>;
}
