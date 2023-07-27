import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';
import { User } from '../modules/user';

export const buildUserSession = createAction('[Users] Build User Session');

export const buildUserSessionSuccess = createAction(
  '[Users] Load Users Success',
  props<{ user: User }>()
);

export const buildUserSessionFailure = createAction(
  '[Users] Build User Session Failed'
);
