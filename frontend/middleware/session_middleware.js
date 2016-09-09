import {login, logout, signUp, SessionConstants, receiveCurrentUser,
        receiveErrors} from '../actions/session_actions';
import { signUpUser, logInUser, logOutUser } from '../util/session_api_util';
import { hashHistory } from 'react-router';

const SessionMiddleware = store => next => action => {
  let success;
  let error = (errors) => store.dispatch(receiveErrors(errors.responseJSON));
  switch(action.type){
    case SessionConstants.SIGNUP:
      success = user => store.dispatch(receiveCurrentUser(user));
      signUpUser(success, action.userParams, error);
      break;
    case SessionConstants.LOGIN:
      success = (user) => store.dispatch(receiveCurrentUser(user));
      logInUser(success, action.userParams, error);
      break;
    case SessionConstants.LOGOUT:
      success = () => {
        hashHistory.push('/');
        next(action);};
      logOutUser(success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
