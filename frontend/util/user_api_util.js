
export const fetchUsers = (success, error) => {
  $.ajax({
    url: 'api/users',
    type: 'GET',
    success: success,
    error: error
  });
};

export const fetchUser = (success, userParams, error) => {
  $.ajax({
    url: `api/users/${userParams.user.id}`,
    type: 'GET',
    data: userParams,
    success: success,
    error: error
  });
};
