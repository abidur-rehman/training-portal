import { all } from 'redux-saga/effects';
import { watchAuthUser, watchSignUpUser } from './user/user.saga';
import { watchUpdateProfile, watchUpdatePassword } from './profile/profile.saga';
import { watchFetchSectionData } from './section/section.saga';
import { watchFetchQuizData } from './quiz/quiz.saga';
import { watchFetchCourseData, watchUpdateUserCourse,
  watchFetchCourseInProgressData, watchFetchCourseComplData } from './course/course.saga';

export default function* rootSaga() {
  yield all([
    watchAuthUser(),
    watchSignUpUser(),
    watchUpdateProfile(),
    watchUpdatePassword(),
    watchFetchSectionData(),
    watchFetchQuizData(),
    watchFetchCourseData(),
    watchUpdateUserCourse(),
    watchFetchCourseInProgressData(),
    watchFetchCourseComplData()
  ]);
}