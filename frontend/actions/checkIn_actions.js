

export const CheckInConstants = {
  CREATE_CHECK_IN: "CREATE_CHECK_IN",
  RECEIVE_CHECK_IN: "RECEIVE_CHECK_IN",
  EDIT_CHECK_IN: "EDIT_CHECK_IN",
  DELETE_CHECK_IN: "DELETE_CHECK_IN",
  REQUEST_CHECK_INS: "REQUEST_CHECK_INS",
  RECEIVE_CHECK_INS: "RECEIVE_CHECK_INS",
  RECEIVE_CHECKIN_ERRORS: "RECEIVE_CHECKIN_ERRORS",
  DELETE_CHECK_IN_FROM_STATE: "DELETE_CHECK_IN_FROM_STATE"
};

export const newCheckIn = (checkInParams) => ({
  type: CheckInConstants.CREATE_CHECK_IN,
  checkInParams
});

export const updateCheckIn = (checkInParams) => ({
  type: CheckInConstants.EDIT_CHECK_IN,
  checkInParams
});

export const deleteCheckIn = (checkInParams) => ({
  type: CheckInConstants.DELETE_CHECK_IN,
  checkInParams
});

export const deleteCheckInFromState = (deletedCheckIn) => ({
  type: CheckInConstants.DELETE_CHECK_IN_FROM_STATE,
  deletedCheckIn
});

export const requestCheckIns = (checkInParams) => ({
  type: CheckInConstants.REQUEST_CHECK_INS,
  checkInParams
});

export const receiveCheckIn = (checkIn) => ({
  type: CheckInConstants.RECEIVE_CHECK_IN,
  checkIn
});

export const receiveCheckIns = (checkIns) => ({
  type: CheckInConstants.RECEIVE_CHECK_INS,
  checkIns
});

export const receiveErrors = (errors) => ({
  type: CheckInConstants.RECEIVE_CHECKIN_ERRORS,
  errors
});
