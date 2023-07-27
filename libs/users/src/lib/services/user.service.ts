import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modules/user';
import * as countriesLib from 'i18n-iso-countries';
import { LocalStorageService } from './localstorge.service';
import { Router } from '@angular/router';
import { UsersFacade } from '../state/users.facade';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUserUrl = environment.apiUrl + 'users';

  constructor(
    private http: HttpClient,
    private token: LocalStorageService,
    private router: Router,
    private userFacade: UsersFacade
  ) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUserUrl}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUserUrl} `, user);
  }
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUserUrl}/${userId}`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUserUrl}/${userId}`);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUserUrl}/${user.id}`, user);
  }
  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en');
  }

  getCountries(): { id: string; name: string }[] {
    return Object.entries(
      countriesLib.getNames('en', { select: 'official' })
    ).map((entry) => {
      return {
        id: entry[0],
        name: entry[1],
      };
    });
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUserUrl}/login`, {
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
}
