import { all } from 'redux-saga/effects';
import { watchAuthUser, watchSignUpUser } from './user/user.saga';
import { watchfetchSectionData } from './section/section.saga';
import { watchfetchQuizData } from './quiz/quiz.saga';

export default function* rootSaga() {
  yield all([
    watchAuthUser(),
    watchSignUpUser(),
    watchfetchSectionData(),
    watchfetchQuizData()
  ]);
}