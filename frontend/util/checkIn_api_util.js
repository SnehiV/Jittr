export const createCheckIn = (success, checkInParams, error) => {
  $.ajax({
    url: 'api/check_ins',
    type: 'POST',
    data: checkInParams,
    success: success,
    error: error
  });
};

export const fetchCheckIns = (success, checkInParams, error) => {
  $.ajax({
    url: 'api/check_ins',
    type: 'GET',
    data: checkInParams,
    success: success,
    error: error
  });
};

export const editCheckIn = (success, checkInParams, error) => {
  $.ajax({
    url: `api/check_ins/${checkInParams.checkIn.id}`,
    type: 'PATCH',
    data: checkInParams,
    success: success,
    error: error
  });
};

export const destroyCheckIn = (success, checkInParams, error) => {
  $.ajax({
    url: `api/check_ins/${checkInParams.checkIn.id}`,
    type: 'DELETE',
    data: checkInParams,
    success: success,
    error: error
  });
};
