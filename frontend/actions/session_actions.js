

export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const login = (userParams) => ({
  type: SessionConstants.LOGIN,
  userParams
});

export const signUp = (userParams) => ({
  type: SessionConstants.SIGNUP,
  userParams
});

export const receiveCurrentUser = (currentUser) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});

export const logout = () => ({
  type: SessionConstants.LOGOUT,
});
