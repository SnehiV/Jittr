

export const friendRequest = (success, friendshipParams, error) => {
  $.ajax({
    url: 'api/friendships',
    type: 'POST',
    data: friendshipParams,
    success: success,
    error: error
  });
};

export const requestResponse = (success, friendshipParams, currentUserId, error) => {
  $.ajax({
    url: `api/friendships/${currentUserId}`,
    type: 'PATCH',
    data: friendshipParams,
    success: success,
    error: error
  });
};

export const deleteFriend = (success, friendshipParams, currentUserId, error) => {
  $.ajax({
    url: `api/friendships/${currentUserId}`,
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
