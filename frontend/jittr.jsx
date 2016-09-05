import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

//testing

  import {FriendshipConstants, requestFriend, respondToRequest,
          removeFriend, requestFriendshipData,
          receiveFriendshipData, receiveErrors} from './actions/friendship_actions';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  window.requestFriend = requestFriend;
  window.respondToRequest = respondToRequest;
  window.removeFriend = removeFriend;
  window.receiveFriendshipData = receiveFriendshipData;
  window.requestFriendshipData = requestFriendshipData;

  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.store = configureStore(preloadedState);
  ReactDOM.render(<div><Root store={store} /></div>, rootEl);
});
