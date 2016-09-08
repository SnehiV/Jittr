export const UserConstants = ({
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_USERS: "RECEIVE_USERS",
  REQUEST_USER: "REQUEST_USER",
  RECEIVE_USER: "RECEIVE_USER"
});

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS,
});

export const receiveUsers = (users) => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

export const requestUser = (userParams) => ({
  type: UserConstants.REQUEST_USER,
  userParams
});

export const receiveUser = (user) => ({
  type: UserConstants.RECEIVE_USER,
  user
});
