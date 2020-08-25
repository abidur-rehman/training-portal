import { ProfileActionTypes } from './profile.types';

export const updateProfile = (firstname, lastname, email, emailOriginal) => ({
  type: ProfileActionTypes.UPDATE_PROFILE,
  payload: { firstname, lastname, email, emailOriginal }
});

export const updatePassword = (email, password, newPassword) => ({
  type: ProfileActionTypes.UPDATE_PASSWORD,
  payload: { email, password, newPassword }
});

export const resetMessage = () => ({
  type: ProfileActionTypes.RESET_MESSAGE,
});

export const formError = (text) => ({
  type: ProfileActionTypes.FORM_ERROR,
  payload: text
});
