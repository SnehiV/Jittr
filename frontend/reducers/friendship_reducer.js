import { FriendshipConstants } from '../actions/friendship_actions';
import merge from 'lodash/merge';

const defaultState = {friends: [], pending_friends: [], requested_friends: [], errors: []};
const FriendshipReducer = (state = defaultState, action) =>  {
  let newState;
  switch (action.type) {
    case FriendshipConstants.RECEIVE_FRIENDSHIP_DATA:
      newState = merge({}, action.friendshipData, {error: []});
      return newState;
    case FriendshipConstants.RECEIVE_ERRORS:
      newState = merge({}, state, {error: []});
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default FriendshipReducer;
