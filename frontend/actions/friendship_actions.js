export const FriendshipConstants = {
  REQUEST_FRIEND: "REQUEST_FRIEND",
  RESPOND_TO_REQUEST: "RESPOND_TO_REQUEST",
  REMOVE_FRIEND: "REMOVE_FRIEND",
  REQUEST_FRIENDSHIP_DATA: "REQUEST_FRIENDSHIP_DATA",
  RECEIVE_FRIENDSHIP_DATA: "RECEIVE_FRIENDSHIP_DATA",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const requestFriend = (friendshipParams) => ({
  type: FriendshipConstants.REQUEST_FRIEND,
  friendshipParams
});

export const respondToRequest = (friendshipParams) => ({
  type: FriendshipConstants.RESPOND_TO_REQUEST,
  friendshipParams
});

export const requestFriendshipData = () => ({
  type: FriendshipConstants.REQUEST_FRIENDSHIP_DATA,
});

export const removeFriend = (friendshipParams) => ({
  type: FriendshipConstants.REMOVE_FRIEND,
  friendshipParams
});

export const receiveFriendshipData = (friendshipData) => ({
  type: FriendshipConstants.RECEIVE_FRIENDSHIP_DATA,
  friendshipData
});

export const receiveErrors = (errors) => ({
  type: FriendshipConstants.RECEIVE_ERRORS,
  errors
});
