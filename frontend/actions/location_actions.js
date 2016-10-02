
export const LocationConstants = ({
  REQUEST_LOCATIONS: "REQUEST_LOCATIONS",
  RECEIVE_LOCATIONS: "RECEIVE_LOCATIONS",
  CREATE_LOCATION: "CREATE_LOCATION",
  RECEIVE_LOCATION: "RECEIVE_LOCATION",
  RECIEVE_ERRORS: "RECIEVE_ERRORS"
});

export const requestLocations =  () => ({
  type: LocationConstants.REQUEST_LOCATIONS,
});

export const receiveLocations = (locations) => ({
  type: LocationConstants.RECEIVE_LOCATIONS,
  locations
});

export const createLocation = (locationParams) => ({
  type: LocationConstants.CREATE_LOCATION,
  locationParams
});

export const receiveErrors = (errors) => ({
  type: LocationConstants.RECEIVE_ERRORS,
  errors
});

export const receiveLocation = (location) => ({
  type: LocationConstants.RECEIVE_LOCATION,
  location
});
