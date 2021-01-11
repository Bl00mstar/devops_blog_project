import userTypes from "./user.types";
export const requestUser = () => {
  return { type: "REQUESTED_USER" };
};

export const requestUserSuccess = (data) => {
  return { type: "USER_LOADED", payload: data };
};

export const requestUserError = () => {
  return { type: "AUTH_ERROR" };
};

export const getUser = () => {
  return { type: "USER_LOADING" };
};
export const logoutUser = () => {
  return { type: "LOGOUT_SUCCESS" };
};

export const logInUser = (data) => {
  return { type: userTypes.FETCH_USER, params: data };
};
export const requestedUserSuccess = (data) => {
  return { type: userTypes.FETCHED_USER_SUCCESS, payload: data };
};
export const requestedUserFailed = (data) => {
  return { type: "FETCHED_USER_FAIL", payload: data };
};
