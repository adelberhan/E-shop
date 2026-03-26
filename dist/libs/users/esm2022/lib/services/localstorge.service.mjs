import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const TOKEN = 'jwtToken';
export class LocalStorageService {
    constructor() { }
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
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
        }
        else {
            return false;
        }
    }
    token_exp(exp) {
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
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    static { this.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9sb2NhbHN0b3JnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUt6QixNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxDQUFDLElBQVk7UUFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELFdBQVc7UUFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUNPLFNBQVMsQ0FBQyxHQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsaUVBQWlFO0lBQ2pFLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLHlEQUF5RDtJQUN6RCxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixJQUFJO0lBRUosY0FBYztRQUNaLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksV0FBVyxFQUFFO2dCQUNmLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO29GQXREVSxtQkFBbUI7dUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07O3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBUT0tFTiA9ICdqd3RUb2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzZXRUb2tlbihkYXRhOiBzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTik7XHJcbiAgfVxyXG4gIHJlbW92ZVRva2VuKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU4pO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFRva2VuKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgdG9rZW5EZWNvZGUgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4gICAgICByZXR1cm4gIXRoaXMudG9rZW5fZXhwKHRva2VuRGVjb2RlLmV4cCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgdG9rZW5fZXhwKGV4cDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApID49IGV4cDtcclxuICB9XHJcblxyXG4gIC8vIGdldElkRnJvbVRva2VuKCkge1xyXG4gIC8vICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XHJcbiAgLy8gICBpZiAodG9rZW4pIHtcclxuICAvLyAgICAgY29uc3QgdG9rZW5EZWNvZGUgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4gIC8vICAgICBpZiAodG9rZW5EZWNvZGUpIHtcclxuICAvLyAgICAgICByZXR1cm4gdG9rZW5EZWNvZGUudXNlcklkO1xyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIC8vICogaWYgaSBnb3QgdG9rZW5EZWNvZGUgYnV0IG5vdCBpbmNsdWRlIHRoZSBJRFxyXG4gIC8vICAgICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAvLyAqIGlmIGkgZGlkIG5vdCBnb3QgdGhlIHRva2VuXHJcbiAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgZ2V0SWRGcm9tVG9rZW4oKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCB0b2tlbkRlY29kZSA9IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSk7XHJcbiAgICAgIGlmICh0b2tlbkRlY29kZSkge1xyXG4gICAgICAgIHJldHVybiB0b2tlbkRlY29kZS51c2VySWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=