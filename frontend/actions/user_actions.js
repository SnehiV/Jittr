export const UserConstants = ({
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_USERS: "RECEIVE_USERS"
});

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS,
});

export const receiveUsers = (users) => ({
  type: UserConstants.RECEIVE_USERS,
  users
});
