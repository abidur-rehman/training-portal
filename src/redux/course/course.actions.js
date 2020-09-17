import CourseActionTypes from './course.types';

export const fetchCourseData = () => ({
  type: CourseActionTypes.FETCH_COURSE_DATA
});

export const fetchCoursesInProgressData = () => ({
  type: CourseActionTypes.FETCH_COURSE_IN_PROGRESS_DATA
});

export const fetchCoursesComplData = () => ({
  type: CourseActionTypes.FETCH_COURSE_COMPL_DATA
});

export const updateUserCourse = (course) => ({
  type: CourseActionTypes.UPDATE_USER_COURSE,
  payload: course
});

export const updateTimeSpend = (timeSpent) => ({
  type: CourseActionTypes.UPDATE_TIME_SPENT,
  payload: timeSpent
});

export const fetchCourseDataError = error => ({
  type: CourseActionTypes.FETCH_COURSE_DATA_ERROR,
  payload: error
});