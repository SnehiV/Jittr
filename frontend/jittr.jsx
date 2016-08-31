import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

//testing

import { login, logout, signUp } from './actions/session_actions';
import {SessionConstants, receiveCurrentUser, receiveErrors} from './actions/session_actions';
import { signUpUser, logInUser, logOutUser } from './util/session_api_util';

window.login = login;
window.signUp = signUp;

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
