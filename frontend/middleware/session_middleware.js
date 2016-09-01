import {login, logout, signUp, SessionConstants, receiveCurrentUser,
        receiveErrors} from '../actions/session_actions';
import { signUpUser, logInUser, logOutUser } from '../util/session_api_util';

const SessionMiddleware = store => next => action => {
  let success;
  // debugger
  let error = (errors) => store.dispatch(receiveErrors(errors.responseJSON));
  switch(action.type){
    case SessionConstants.SIGNUP:
      success = user => store.dispatch(receiveCurrentUser(user));
      // error = errors => store.dispatch(receiveErrors(errors));
      signUpUser(success, action.userParams, error);
      break;
    case SessionConstants.LOGIN:
      success = (user) => store.dispatch(receiveCurrentUser(user));
      // error = (errors) => store.dispatch(receiveErrors(errors));
      logInUser(success, action.userParams, error);
      break;
    case SessionConstants.LOGOUT:
      success = () => {next(action);};
      // error = errors => store.dispatch(receiveErrors(errors));
      logOutUser(success, action.userParams, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
