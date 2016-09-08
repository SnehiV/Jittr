import {CheckInConstants, newCheckIn,
        updateCheckIn, deleteCheckIn,
        requestCheckIns, receiveCheckIns,
        receiveCheckIn, receiveErrors,
        deleteCheckInFromState} from '../actions/checkIn_actions';

import {createCheckIn, editCheckIn,
        fetchCheckIns, destroyCheckIn} from '../util/checkIn_api_util';


export const CheckInMiddleware = store => next => action => {
  let success;
  let error = errors => store.dispatch(receiveErrors(errors.responseJSON));
  switch(action.type){
    case CheckInConstants.CREATE_CHECK_IN:
      success = checkIn => store.dispatch(receiveCheckIn(checkIn));
      createCheckIn(success, action.checkInParams, error);
      break;
    case CheckInConstants.EDIT_CHECK_IN:
      success = checkIn => store.dispatch(receiveCheckIn(checkIn));
      editCheckIn(success, action.checkInParams, error);
      break;
    case CheckInConstants.REQUEST_CHECK_INS:
      success = checkIns => store.dispatch(receiveCheckIns(checkIns));
      fetchCheckIns(success, action.checkInParams, error);
      break;
    case CheckInConstants.DELETE_CHECK_IN:
      success = deletedCheckIn => store.dispatch(deleteCheckInFromState(deletedCheckIn));
      destroyCheckIn(success, action.checkInParams, error);
      break;
    default:
      return next(action);
  }
};

export default CheckInMiddleware;
