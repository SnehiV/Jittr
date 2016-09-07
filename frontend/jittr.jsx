import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

//testing

import {requestUsers} from './actions/user_actions';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  window.requestUsers = requestUsers;
  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
