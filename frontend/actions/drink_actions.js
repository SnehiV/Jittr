
export const DrinkConstants = ({
  REQUEST_DRINKS: "REQUEST_DRINKS",
  RECEIVE_DRINKS: "RECEIVE_DRINKS",
  CREATE_DRINK: "CREATE_DRINK",
  RECEIVE_DRINK: "RECEIVE_DRINK",
  RECIEVE_ERRORS: "RECIEVE_ERRORS"
});

export const requestDrinks =  () => ({
  type: DrinkConstants.REQUEST_DRINKS,
});

export const receiveDrinks = (drinks) => ({
  type: DrinkConstants.RECEIVE_DRINKS,
  drinks
});

export const createDrink = (drinkParams) => ({
  type: DrinkConstants.CREATE_DRINK,
  drinkParams
});

export const receiveErrors = (errors) => ({
  type: DrinkConstants.RECEIVE_ERRORS,
  errors
});

export const receiveDrink = (drink) => ({
  type: DrinkConstants.RECEIVE_DRINK,
  drink
});
