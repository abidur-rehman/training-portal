import { UserActionTypes } from './user.types';

export const authUser = (email, password) => ({
  type: UserActionTypes.AUTH_USER,
  payload: { email, password }
});

export const signUpUser = (name, firstname, lastname, email, password) => ({
  type: UserActionTypes.SIGN_USER,
  payload: { name, firstname, lastname, email, password }
});

// export const updateProfile = (firstname, lastname, email, emailOriginal) => ({
//   type: UserActionTypes.UPDATE_PROFILE,
//   payload: { firstname, lastname, email, emailOriginal }
// });

// export const updatePassword = (email, password, newPassword) => ({
//   type: UserActionTypes.UPDATE_PROFILE,
//   payload: { email, password, newPassword }
// });

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const resetMessage = () => ({
  type: UserActionTypes.RESET_MESSAGE,
});
