import {UserConstants, requestUsers, receiveUsers} from '../actions/user_actions';

import {fetchUsers} from '../util/user_api_util';

const UserMiddleware = store => next => action => {
  let success = (users) => store.dispatch(receiveUsers(users));
  let error = (errors) => console.log(errors);

  switch (action.type) {
    case UserConstants.REQUEST_USERS:
      fetchUsers(success, error);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
