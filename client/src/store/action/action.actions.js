import actionTypes from "./action.types";

export const loadPath = () => {
  return { type: actionTypes.LOAD_PATH };
};

export const loadedPath = (data) => {
  return { type: actionTypes.LOADED_PATH, payload: data };
};

export const selectPath = (data) => {
  return { type: actionTypes.SELECT_PATH, payload: data };
};

export const setPathData = (data) => {
  return { type: actionTypes.SET_PATH, payload: data };
};
