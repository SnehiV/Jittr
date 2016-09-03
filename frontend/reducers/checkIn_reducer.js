import { CheckInConstants } from '../actions/checkIn_actions';
import merge from 'lodash/merge';

const CheckInReducer = (state = {}, action) => {
  let newState;
  console.log(action);
  switch (action.type) {
    case CheckInConstants.RECEIVE_CHECK_IN:
      newState = merge({}, state, action.checkIn);
      return newState;
    case CheckInConstants.RECEIVE_CHECK_INS:
      newState = merge({}, state, action.checkIns);
      return newState;
    case CheckInConstants.RECEIVE_ERRORS:
      newState = merge({}, state, action.errors);
      newState.errors = action.errors;
      return newState;
    case CheckInConstants.DELETE_CHECK_IN_FROM_STATE:
      newState = merge({}, state);
      // debugger
      delete newState[action.deletedCheckIn.id];
      return newState;
    default:
      return state;
  }
};

export default CheckInReducer;
