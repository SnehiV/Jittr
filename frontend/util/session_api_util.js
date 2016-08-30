
export const signUpUser = (success, userParams, error) => {
  $.ajax({
    url: 'api/users',
    type: 'POST',
    data: userParams,
    success: success,
    error: error
  });
};

export const logInUser = (success, userParams, error) => {
  $.ajax({
    url: 'api/session',
    type: 'POST',
    data: userParams,
    success: success,
    error: error
  });
};

export const logOutUser = (success, error) => {
  $.ajax({
    url: 'api/session',
    type: 'DELETE',
    success: success,
    error: error
  });
};
