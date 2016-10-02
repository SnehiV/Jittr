import { LocationConstants } from '../actions/location_actions';

import merge from 'lodash/merge';

const LocationReducer = (state = {locations: {}, errors: []}, action) => {
  let newState;
  switch (action.type) {
    case LocationConstants.RECEIVE_LOCATIONS:
      newState = merge({}, state, {locations: action.locations});
      return newState;
    case LocationConstants.RECEIVE_LOCATION:
      let newLocations = merge({}, state.locations, action.location);
      newState = merge({}, state, newLocations);
      return newState;
    case LocationConstants.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;
