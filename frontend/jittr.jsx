import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import { requestDrinks } from './actions/drink_actions';


import {requestLocations} from './actions/location_actions';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  let preloadedState = {};

  window.requestLocations = requestLocations;
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
