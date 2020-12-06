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

export const loadTitle = (data) => {
  return { type: actionTypes.LOAD_TITLE, payload: data };
};

export const setPost = (data) => {
  return { type: actionTypes.SET_POST, payload: data };
};

export const addToHistory = (data) => {
  return { type: actionTypes.ADD_HISTORY, payload: data };
};
