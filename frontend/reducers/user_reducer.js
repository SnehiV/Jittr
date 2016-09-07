import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case UserConstants.RECEIVE_USERS:
      let newState = merge([], state, action.users);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
