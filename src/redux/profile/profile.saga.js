import { call, put, takeEvery } from 'redux-saga/effects';
import { updatePro, updatePass } from '../../api/restApi';
import { ProfileActionTypes } from './profile.types';
import { UserActionTypes } from '../../redux/user/user.types';

export function* updateProfile(action) {
  const response = yield call(updatePro, action.payload);
  const { data, status } = response;
  if (data && status === 200) {
    yield put({ type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
    yield put({ type: UserActionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
  } else {
    yield put({ type: ProfileActionTypes.UPDATE_PROFILE_FAILURE, payload: data });
  }
}

export function* updatePassword(action) {
  try {
    const response = yield call(updatePass, action.payload);
    const { data, status } = response;
    if (data && status === 200) {
      yield put({ type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
      yield put({ type: UserActionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
    } else {
      yield put({ type: ProfileActionTypes.UPDATE_PASSWORD_FAILURE, payload: data });
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


