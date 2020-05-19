import QuizActionTypes from './quiz.types';

export const fetchQuizData = () => ({
  type: QuizActionTypes.FETCH_QUIZ_DATA
});

export const fetchQuizDataError = error => ({
  type: QuizActionTypes.FETCH_QUIZ_DATA_ERROR,
  payload: error
});