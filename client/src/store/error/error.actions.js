import errorTypes from "./error.types";

export const getError = (msg) => {
  return { type: errorTypes.GET_ERROR, payload: msg };
};

export const clearError = () => {
  return { type: errorTypes.CLEAR_ERROR };
};
