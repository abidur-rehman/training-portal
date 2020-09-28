import CourseActionTypes from './course.types';

const initialState = {
  loading: true,
  timeSpent: '',
  data: [],
  dataInProgress: [],
  dataCompl: []
}

const normalize = (courses) => {
  const result = courses.filter((item) => {
    return item.progress < 100 && item.progress > 0;
  })
  return result;
}

const normalizeCompled = (courses) => {
  const result = courses.filter((item) => {
    return item.progress === 100;
  })
  return result;
}

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case CourseActionTypes.FETCH_COURSE_IN_PROGRESS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataInProgress: normalize(action.payload)
      };
    case CourseActionTypes.FETCH_COURSE_COMPL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataCompl: normalizeCompled(action.payload)
      };
    case CourseActionTypes.UPDATE_TIME_SPENT:
      return {
        ...state,
        timeSpent: action.payload
      };
    default:
      return state;
  }
};

export default courseReducer;
