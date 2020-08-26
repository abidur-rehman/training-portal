import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { GlobalStyle } from './global.styles';

// import HomePage from './pages/homepage/homepage.component';
import StartPage from './pages/start/startpage.component';
import SectionPage from './pages/section/section.component';
import QuizPage from './pages/quiz/quiz.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

import Player from './components/player/player.component';
import DashboardPage from './pages/dashboard/dashboard.container';
import ProfilePage from './pages/profile/profile.container';

const App = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' render={() => currentUser !== null ? (<DashboardPage/>) : (<StartPage/>)} />
        <Route path='/section' component={SectionPage} />
        <Route path='/dashboard' render={() => currentUser !== null ? (<DashboardPage/>) : (<StartPage/>)} />
        <Route path='/profile' render={() => currentUser !== null ? (<ProfilePage/>) : (<StartPage/>)} />
        <Route path='/quiz' component={QuizPage} />
        <Route path='/play' component={Player} />
        <Route exact path='/signin' render={() => currentUser !== null ? (<Redirect to='/dashboard'/>) : (<SignIn/>)} />
        <Route exact path='/signup' render={() => currentUser !== null ? (<Redirect to='/dashboard'/>) : (<SignUp/>)} />
      </Switch>
    </div>
  );
}

export default App;
