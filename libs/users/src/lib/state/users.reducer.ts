import {  EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';
import { User } from '../modules/user';

export const USERS_FEATURE_KEY = 'users';

// 1- state entities declaration
export interface usersState {
  user: User;
  isAuthenticated: boolean;
}

// export interface UsersState extends EntityState<UsersEntity> {
//   selectedId?: string | number; // which Users record has been selected
//   loaded: boolean; // has the Users list been loaded
//   error?: string | null; // last known error (if any)
// }


export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: usersState;
}

// * Init value for the state *//
export const initialUserState: usersState = {
  user: null,
  isAuthenticated: false,
};

// export const usersAdapter: EntityAdapter<UsersEntity> =
//   createEntityAdapter<UsersEntity>();

// export const initialUsersState: usersState = usersAdapter.getInitialState({
//   // set initial required properties
//   loaded: false,
// });

export const usersReducer = createReducer(
  initialUserState,
  on(UsersActions.buildUserSession, (state) => ({ ...state })),
  // ...state Means we are going to update this state not going to change the whole state.
  //This is called  immutable.
  on(UsersActions.buildUserSessionSuccess, (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: true,
  })),
  on(UsersActions.buildUserSessionFailure, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
  }))
);

export function reducer(state:  | undefined, action: Action) {
  return usersReducer(state, action);
}
