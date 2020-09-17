import { call, put, takeEvery } from 'redux-saga/effects';
import { authenticate, signup } from '../../api/restApi';
import { UserActionTypes } from './user.types';

const LOGIN_MESSAGES = {
  '401': "There seems to be a problem with your credentials. Please check your credentials and try again."
};


export function* authUser(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(authenticate, email, password);
    const { data, status } = response;
    if (data && status === 200) {
      yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: data });
    } else {
      yield put({ type: UserActionTypes.AUTH_USER_FAILURE, payload: LOGIN_MESSAGES[status] });
    }
  } catch (exception) {
    throw exception;
  }
}

export function* signUpUser(action) {
  console.log(`User.saga signUpUser ${JSON.stringify(action.payload)}`);
  const { name, firstname, lastname, email, password } = action.payload;
  const response = yield call(signup, name, firstname, lastname, email, password);
  const { data, status } = response;
  if (data && status === 201) {
    yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: data });
  } else {
    yield put({ type: UserActionTypes.SIGN_USER_FAILURE, payload: data });
  }
}

export function* watchSignUpUser() {
  yield takeEvery(UserActionTypes.SIGN_USER, signUpUser);
}

export function* watchAuthUser() {
  yield takeEvery(UserActionTypes.AUTH_USER, authUser);
}