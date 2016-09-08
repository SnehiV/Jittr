import { DrinkConstants } from '../actions/drink_actions';

import merge from 'lodash/merge';

const DrinkReducer = (state = {drinks: {}, errors: []}, action) => {
  let newState;
  switch (action.type) {
    case DrinkConstants.RECEIVE_DRINKS:
      newState = merge({}, state, {drinks: action.drinks});
      return newState;
    case DrinkConstants.RECEIVE_DRINK:
      let newDrinks = merge({}, state.drinks, action.drink);
      newState = merge({}, state, newDrinks);
      return newState;
    case DrinkConstants.RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default DrinkReducer;
