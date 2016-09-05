import { FriendshipConstants } from '../actions/friendship_actions';
import merge from 'lodash/merge';

const FriendshipReducer = (state = {error: []}, action) =>  {
  let newState;
  switch (action.type) {
    case FriendshipConstants.RECEIVE_FRIENDSHIP_DATA:
      newState = merge({}, action.friendshipData, {error: []});
      console.log(newState);
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
