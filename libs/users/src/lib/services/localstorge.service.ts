import { Injectable } from '@angular/core';

const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setToken(data: string) {
    localStorage.setItem(TOKEN, data);
  }
  getToken(): string {
    return localStorage.getItem(TOKEN);
  }
  removeToken() {
    localStorage.removeItem(TOKEN);
  }

  isValidToken() {
    const token = this.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      return !this.token_exp(tokenDecode.exp);
    } else {
      return false;
    }
  }
  private token_exp(exp: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= exp;
  }

  // getIdFromToken() {
  //   const token = this.getToken();
  //   if (token) {
  //     const tokenDecode = JSON.parse(atob(token.split('.')[1]));
  //     if (tokenDecode) {
  //       return tokenDecode.userId;
  //     } else {
  //       // * if i got tokenDecode but not include the ID
  //       return null;
  //     }
  //   } else {
  //     // * if i did not got the token
  //     return null;
  //   }
  // }

  getIdFromToken() {
    const token = this.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode) {
        return tokenDecode.userId;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
