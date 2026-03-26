import { UsersPartialState, usersState } from './users.reducer';
export declare const getUsersState: import("@ngrx/store").MemoizedSelector<UsersPartialState, usersState, import("@ngrx/store").DefaultProjectorFn<usersState>>;
export declare const getUser: import("@ngrx/store").MemoizedSelector<UsersPartialState, import("@ng-shop/users").User, (s1: usersState) => import("@ng-shop/users").User>;
export declare const getUserIsAuth: import("@ngrx/store").MemoizedSelector<UsersPartialState, boolean, (s1: usersState) => boolean>;
