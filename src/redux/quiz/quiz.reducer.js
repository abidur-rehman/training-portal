import QuizActionTypes from './quiz.types';

const initialState = {
  loading: true
}

const normalize = (quizes) => {
  const result = quizes.reduce(function(result, item) {
    let key = item.routeName;
    result[key] = item;
    return result;
  }, {});
  return result;
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUIZ_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: normalize(action.payload)
      };
    default:
      return state;
  }
};

export default quizReducer;
