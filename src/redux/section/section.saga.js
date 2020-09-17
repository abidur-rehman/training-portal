import { call, put, takeEvery } from 'redux-saga/effects';
import { getSectionData } from '../../api/restApi';
import SectionActionTypes from './section.types';

export function* fetchSectionData() {
  try {
  const response = yield call(getSectionData);
  const data = yield response.data;
  yield put({ type: SectionActionTypes.FETCH_SECTION_DATA_SUCCESS, payload: data.sections });
  } catch (exception) {
    throw exception;
  }
}

export function* watchFetchSectionData() {
  yield takeEvery(SectionActionTypes.FETCH_SECTION_DATA, fetchSectionData);
}