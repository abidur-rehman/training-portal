import { UserActionTypes } from './user.types';

export const authUser = (email, password) => ({
  type: UserActionTypes.AUTH_USER,
  payload: { email, password }
});

export const signUpUser = (name, firstname, lastname, email, password) => ({
  type: UserActionTypes.SIGN_USER,
  payload: { name, firstname, lastname, email, password }
});

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const resetMessage = () => ({
  type: UserActionTypes.USER_RESET_MESSAGE,
});
