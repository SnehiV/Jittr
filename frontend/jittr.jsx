import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

//testing

import {CheckInConstants, newCheckIn,
        updateCheckIn, deleteCheckIn,
        requestCheckIns, receiveCheckIns,
        receiveErrors, receiveCheckIn} from './actions/checkIn_actions';
import { createCheckIn, fetchCheckIns, editCheckIn, destroyCheckIn } from './util/checkIn_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  window.newCheckIn = newCheckIn;
  window.updateCheckIn = updateCheckIn;
  window.deleteCheckIn = deleteCheckIn;
  window.requestCheckIns = requestCheckIns;
  window.createCheckIn = createCheckIn;
  // debugger
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
