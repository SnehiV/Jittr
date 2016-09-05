import { FriendshipConstants } from '../actions/friendship_actions';
import merge from 'lodash/merge';

const FriendshipReducer = (state = {}, action) =>  {
  let newState;
  switch (action.type) {
    case FriendshipConstants.RECEIVE_FRIENDSHIP_DATA:
      newState = merge({}, state, action.friendshipData);
      return newState;
    case FriendshipConstants.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default FriendshipReducer;
