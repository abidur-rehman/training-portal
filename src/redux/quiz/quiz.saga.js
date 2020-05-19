import { call, put, takeEvery } from 'redux-saga/effects';
import { getQuizData } from '../../api/restApi';
import QuizActionTypes from './quiz.types';

export function* fetchQuizData() {
  try {
  const response = yield call(getQuizData);
  const data = yield response.data;
  yield put({ type: QuizActionTypes.FETCH_QUIZ_DATA_SUCCESS, payload: data.quizes });
  } catch (exception) {
    throw exception;
  }
}

export function* watchfetchQuizData() {
  yield takeEvery(QuizActionTypes.FETCH_QUIZ_DATA, fetchQuizData);
}