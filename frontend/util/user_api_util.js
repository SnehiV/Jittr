
export const fetchUsers = (success, error) => {
  $.ajax({
    url: 'api/users',
    type: 'GET',
    success: success,
    error: error
  });
};
