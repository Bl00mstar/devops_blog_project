import { put, take, takeEvery } from "redux-saga/effects";
import * as actions from "./action.actions";
import actionTypes from "./action.types";
import * as api from "./action.helpers";
import * as blogapi from "../blog/blog.helpers";

export function* watchLoadingPath() {
  yield takeEvery(actionTypes.LOAD_PATH, loadPath);
}

function* loadPath() {
  try {
    const data = yield blogapi.getPosts();
    yield put(actions.loadedPath(data.message));
  } catch (error) {
    console.log("b");
  }
}

export function* watchSelectedPath() {
  yield takeEvery(actionTypes.SELECT_PATH, setPath);
}

function* setPath({ payload }) {
  try {
    console.log(payload);
  } catch (error) {
    console.log("b");
  }
}
