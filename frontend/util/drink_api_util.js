

export const fetchDrinks = (success, error) => {
  $.ajax({
    url: 'api/drinks',
    type: 'GET',
    success: success,
    error: error
  });
};


export const createDrink = (success, drinkParams, error) => {
  $.ajax({
    url: 'api/drinks',
    type: 'POST',
    data: drinkParams,
    success: success,
    error: error
  });
};
