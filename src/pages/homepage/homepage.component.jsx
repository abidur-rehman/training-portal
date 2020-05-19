import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import Directory from '../../components/directory/directory.component';
import QuizDirectory from '../../components/quiz-directory/quiz-directory.component';

import {
  InfoContainer,
  InfoContainerText,
  ButtonContainer,
  Message,
  HomePageContainer } from './homepage.styles';

const HomePage = () => {
  const history = useHistory();
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div>
      <InfoContainer>
        <InfoContainerText>
          GET 30% OFF ON ALL SUBSCRIPTIONS
        </InfoContainerText>
        {currentUser !== null ? (<Message>Your subscription expires on 15.11.2021</Message>) : (
        <ButtonContainer type='submit' onClick={() => (history.push('/signup'))}> Get Subscription Now </ButtonContainer> )}
      </InfoContainer>
      <HomePageContainer>
        <Directory/>
        <QuizDirectory/>
      </HomePageContainer>
    </div>
  )
};

export default HomePage;
