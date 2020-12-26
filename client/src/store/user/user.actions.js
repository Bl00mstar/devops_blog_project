import userTypes from './user.types';

export const requestUser = () => {
  return { type: userTypes.REQUESTED_USER };
};

export const requestUserSuccess = (data) => {
  return { type: userTypes.USER_LOADED, payload: data };
};

export const requestUserError = () => {
  return { type: userTypes.AUTH_ERROR };
};

export const getUser = () => {
  return { type: userTypes.USER_LOADING };
};
export const logoutUser = () => {
  return { type: userTypes.LOGOUT_SUCCESS };
};

export const logInUser = (data) => {
  return { type: userTypes.FETCH_USER, params: data };
};
export const requestedUserSuccess = (data) => {
  return { type: userTypes.FETCHED_USER_SUCCESS, payload: data };
};
export const requestedUserFailed = (data) => {
  return { type: userTypes.FETCHED_USER_FAIL, payload: data };
};
