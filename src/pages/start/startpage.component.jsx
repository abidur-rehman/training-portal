import React from 'react';
import { useHistory } from "react-router-dom";

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import CollectionPageContainer from '../collection/collection.container';

import {
  InfoContainer,
  InfoContainerText,
  ButtonContainer,
  HomePageContainer } from './startpage.styles';

const StartPage = () => {
  const history = useHistory();
  return (
    <div>
      <Header/>
      <InfoContainer>
        <InfoContainerText>
          GET 30% OFF ON ALL SUBSCRIPTIONS
        </InfoContainerText>
        <ButtonContainer type='submit' onClick={() => (history.push('/signup'))}> Get Subscription Now </ButtonContainer>
      </InfoContainer>
      <HomePageContainer>
        <CollectionPageContainer/>
      </HomePageContainer>
    <Footer/>
    </div>
  )
};

export default StartPage;
