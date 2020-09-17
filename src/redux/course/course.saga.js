import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getMyCoursesApi, updateUserCourseApi } from '../../api/restApi';
import CourseActionTypes from './course.types';

export function* fetchCourseData() {
  try {
    const user = yield select((state) => {
      const { user = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      return { userId, token };
    });
    const response = yield call(getMyCoursesApi, user);
    const data = yield response.data;
    yield put({ type: CourseActionTypes.FETCH_COURSE_DATA_SUCCESS, payload: data });
  } catch (exception) {
    throw exception;
  }
}

export function* fetchCourseInProgressData() {
  try {
    const user = yield select((state) => {
      const { user = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      return { userId, token };
    });
    const response = yield call(getMyCoursesApi, user);
    const data = yield response.data;
    yield put({ type: CourseActionTypes.FETCH_COURSE_IN_PROGRESS_DATA_SUCCESS, payload: data });
  } catch (exception) {
    throw exception;
  }
}

export function* fetchCourseComplData() {
  try {
    const user = yield select((state) => {
      const { user = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      return { userId, token };
    });
    const response = yield call(getMyCoursesApi, user);
    const data = yield response.data;
    yield put({ type: CourseActionTypes.FETCH_COURSE_COMPL_DATA_SUCCESS, payload: data });
  } catch (exception) {
    throw exception;
  }
}

export function* updateUserCourse(action) {
  try {
    const user = yield select((state) => {
      const { user = {}, course = {} } = state;
      const { currentUser: { userId = '', token = ''}} = user;
      const { timeSpent } = course;
      return { userId, token, timeSpent };
    });
    const { courseId } = action.payload;
    const response = yield call(updateUserCourseApi, user, courseId);
    const data = yield response.data;
    if (data === -1) {
      yield put({ type: CourseActionTypes.UPDATE_TIME_SPENT_ERROR, payload: data });
    }
  } catch (exception) {
    throw exception;
  }
}

export function* watchFetchCourseData() {
  yield takeEvery(CourseActionTypes.FETCH_COURSE_DATA, fetchCourseData);
}

export function* watchFetchCourseInProgressData() {
  yield takeEvery(CourseActionTypes.FETCH_COURSE_IN_PROGRESS_DATA, fetchCourseInProgressData);
}

export function* watchFetchCourseComplData() {
  yield takeEvery(CourseActionTypes.FETCH_COURSE_COMPL_DATA, fetchCourseComplData);
}

export function* watchUpdateUserCourse() {
  yield takeEvery(CourseActionTypes.UPDATE_USER_COURSE, updateUserCourse);
}