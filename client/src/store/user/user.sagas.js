import * as api from "./user.helpers";
import { put, takeEvery } from "redux-saga/effects";
import {
  requestUser,
  requestUserError,
  requestUserSuccess,
  requestedUserSuccess,
} from "./user.actions";

import { getError, clearError } from "../error/error.actions";

export function* watchUserIsLogged() {
  yield takeEvery("USER_LOADING", isAuthenticated);
}

function* isAuthenticated() {
  try {
    yield put(requestUser());
    const data = yield api.isAuthenticated();
    yield put(requestUserSuccess(data.data));
  } catch (error) {
    yield put(requestUserError());
  }
}

export function* watchLoginUser() {
  yield takeEvery("FETCH_USER", loginUser);
}

function* loginUser(action) {
  yield put(clearError());
  try {
    const user = yield api.loginToApi(action.params);
    yield put(requestedUserSuccess(user.data));
  } catch (error) {
    yield put(getError(error.msg));
  }
}
