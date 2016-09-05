import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

//testing

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }
  console.log(window.currentUser);
  const store = window.store = configureStore(preloadedState);
  console.log(store);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
