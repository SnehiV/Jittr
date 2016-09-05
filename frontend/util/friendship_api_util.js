

export const friendRequest = (success, friendshipParams, error) => {
  $.ajax({
    url: 'api/friendships',
    type: 'POST',
    data: friendshipParams,
    success: success,
    error: error
  });
};

export const requestResponse = (success, friendshipParams, error) => {
  $.ajax({
    url: `api/friendships/${window.currentUser.id}`,
    type: 'PATCH',
    data: friendshipParams,
    success: success,
    error: error
  });
};

export const deleteFriend = (success, friendshipParams, error) => {
  $.ajax({
    url: `api/friendships/${window.currentUser.id}`,
    type: 'DELETE',
    data: friendshipParams,
    success: success,
    error: error
  });
};

export const fetchFriendships = (success, error) => {
  $.ajax({
    url: 'api/friendships',
    type: 'GET',
    success: success,
    error: error
  });
};
