

export const fetchLocations = (success, error) => {
  $.ajax({
    url: 'api/locations',
    type: 'GET',
    success: success,
    error: error
  });
};


export const newLocation = (success, locationParams, error) => {
  $.ajax({
    url: 'api/locations',
    type: 'POST',
    data: locationParams,
    success: success,
    error: error
  });
};
