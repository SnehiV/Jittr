import { DrinkConstants, requestDrinks, receiveDrinks,
        createDrink, receiveErrors, receiveDrink } from '../actions/drink_actions';

import { fetchDrinks, newDrink } from '../util/drink_api_util';


const DrinkMiddleware = store => next => action => {
  let error = errors => store.dispatch(receiveErrors);
  let success;

  switch (action.type) {
    case DrinkConstants.REQUEST_DRINKS:
      success = (drinks) => store.dispatch(receiveDrinks(drinks));
      fetchDrinks(success, error);
      break;
    case DrinkConstants.CREATE_DRINK:
      success = (drink) => store.dispatch(receiveDrink(drink));
      createDrink(success, action.drinkParams, error);
      break;
    default:
      return next(action);
  }
};

export default DrinkMiddleware;
