import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchQuizData } from '../../redux/quiz/quiz.actions';

import QuizCollectionContainer from '../quiz-collection/quiz-collection.container.component';
import { SectionPageContainer } from './quiz.styles';

const QuizPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizData());
  });

  return (
    <SectionPageContainer>
        <Route path={`${match.path}/:collectionId`} component={QuizCollectionContainer}/>
    </SectionPageContainer>
  );
}

export default QuizPage;
