import { Action } from '@ngrx/store';
import { User } from '../modules/user';
export declare const USERS_FEATURE_KEY = "users";
export interface usersState {
    user: User;
    isAuthenticated: boolean;
}
export interface UsersPartialState {
    readonly [USERS_FEATURE_KEY]: usersState;
}
export declare const initialUserState: usersState;
export declare const usersReducer: import("@ngrx/store").ActionReducer<usersState, Action>;
export declare function reducer(state: undefined, action: Action): usersState;
