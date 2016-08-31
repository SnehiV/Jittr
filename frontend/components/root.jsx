import React from 'react';
import SessionContainer from './session_container';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistroy } from 'react-router';
import Splash from './splash';

const Root = ({ store }) => {

const redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser !== null){
    replace("/home");
  }
};

  return (
    <Provider store={store}>
        <Router history={hashHistroy}>
            <Route path="/" component={Splash} onEnter={redirectIfLoggedIn}>
              <Route path="signup" component={SessionContainer} />
              <Route path="login"  component={SessionContainer} />
              <Route path="home" component={App} />
            </Route>
        </Router>
    </Provider>
  );
};

export default Root;
