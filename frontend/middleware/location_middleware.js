import { LocationConstants, requestLocations, receiveLocations,
        createLocation, receiveErrors, receiveLocation } from '../actions/location_actions';

import { fetchLocations, newLocation } from '../util/location_api_util';


const LocationMiddleware = store => next => action => {
  let error = errors => store.dispatch(receiveErrors);
  let success;
  switch (action.type) {
    case LocationConstants.REQUEST_LOCATIONS:
      success = (locations) => store.dispatch(receiveLocations(locations));
      fetchLocations(success, error);
      break;
    case LocationConstants.CREATE_LOCATION:
      success = (location) => store.dispatch(receiveLocation(location));
      createLocation(success, action.locationParams, error);
      break;
    default:
      return next(action);
  }
};

export default LocationMiddleware;
