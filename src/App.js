import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SectionPage from './pages/section/section.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Player from './components/player/player.component';

const App = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/section' component={SectionPage} />
        <Route path='/play' render={() => currentUser === null ? (<Redirect to='/'/>) : (<Player/>)} />
        <Route exact path='/signin' render={() => currentUser !== null ? (<Redirect to='/'/>) : (<SignIn/>)} />
        <Route exact path='/signup' render={() => currentUser !== null ? (<Redirect to='/'/>) : (<SignUp/>)} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
