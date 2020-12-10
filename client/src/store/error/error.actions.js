import errorTypes from "./error.types";

export const errorNotification = (msg) => {
  return { type: errorTypes.GET_ERROR_STORE, payload: msg };
};

export const errorField = (msg) => {
  return { type: errorTypes.GET_ERROR_FRONT, payload: msg };
};

export const clearError = () => {
  return { type: errorTypes.CLEAR_ERROR };
};
