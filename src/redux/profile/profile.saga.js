import { call, put, select, takeEvery } from 'redux-saga/effects';
import { updatePro, updatePass } from '../../api/restApi';
import { ProfileActionTypes } from './profile.types';
import { UserActionTypes } from '../../redux/user/user.types';

const PASSWORD_MESSAGES = {
  '200' : "Password updated successfully. Please login with updated credentials.",
  '406' : "Current password is incorrect, please try again."
}

const PROFILE_MESSAGES = {
  '200' : "Profile updated successfully. Please login with updated credentials.",
  '401' : "Could not update, please re-login."
}

export function* updateProfile(action) {
  try {
    yield put({ type: ProfileActionTypes.UPDATE_LOADER, payload: true });
    const user = yield select((state) => {
      const { user = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      return { userId, token };
    });
    const response = yield call(updatePro, action.payload, user);
    const { firstname, lastname, email } = action.payload;
    const { data, status } = response;
    if (data && status === 200) {
      yield put({ type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload: PROFILE_MESSAGES[status] });
      const result = { firstname, lastname, email };
      yield put({ type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS, payload: result });
    } else {
      yield put({ type: ProfileActionTypes.UPDATE_PROFILE_FAILURE, payload: PROFILE_MESSAGES[status]  });
    }
  } catch (exception) {
    console.log(`Profile saga updatePassword ${JSON.stringify(exception)}`);
  }
}

export function* updatePassword(action) {
  try {
    yield put({ type: ProfileActionTypes.UPDATE_LOADER, payload: true });
    const user = yield select((state) => {
      const { user = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      return { userId, token };
    });
    const response = yield call(updatePass, action.payload, user);
    const { data, status } = response;
    if (data && status === 200) {
      yield put({ type: ProfileActionTypes.UPDATE_PASSWORD_SUCCESS, payload: PASSWORD_MESSAGES[status] });
    } else {
      yield put({ type: ProfileActionTypes.UPDATE_PASSWORD_FAILURE, payload: PASSWORD_MESSAGES[status] });
    }
  } catch (exception) {
    console.log(`Profile saga updatePassword ${JSON.stringify(exception)}`);
  }
}

export function* watchUpdateProfile() {
  yield takeEvery(ProfileActionTypes.UPDATE_PROFILE, updateProfile);
}

export function* watchUpdatePassword() {
  yield takeEvery(ProfileActionTypes.UPDATE_PASSWORD, updatePassword);
}


