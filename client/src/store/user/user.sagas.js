import userTypes from "./user.types";
import * as api from "./user.helpers";
import { put, takeEvery } from "redux-saga/effects";
import {
  requestUser,
  requestUserSuccess,
  requestedUserSuccess,
} from "./user.actions";

import * as errors from "../error/error.actions";

export function* watchUserIsLogged() {
  yield takeEvery(userTypes.USER_LOADING, isAuthenticated);
}

function* isAuthenticated() {
  try {
    yield put(requestUser());
    const data = yield api.isAuthenticated();
    yield put(requestUserSuccess(data.data));
  } catch (error) {
    yield put(errors.errorNotification(error.msg));
  }
}

export function* watchLoginUser() {
  yield takeEvery(userTypes.FETCH_USER, loginUser);
}

function* loginUser(action) {
  yield put(errors.clearError());
  try {
    const user = yield api.loginToApi(action.params);
    yield put(requestedUserSuccess(user.data));
  } catch (error) {
    yield put(errors.errorField(error.msg));
  }
}
