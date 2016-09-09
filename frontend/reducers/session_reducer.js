import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  let newState;
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.error = [];
      return newState;
    case SessionConstants.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case SessionConstants.LOGOUT:
      newState = merge({}, state);
      newState.currentUser = null;
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
