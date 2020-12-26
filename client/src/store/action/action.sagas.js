import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './action.actions';
import * as errors from '../error/error.actions';
import actionTypes from './action.types';
import * as blogapi from '../blog/blog.helpers';

export function* watchLoadingPath() {
  yield takeEvery(actionTypes.LOAD_PATH, loadPath);
}

function* loadPath() {
  try {
    const data = yield blogapi.handleRequest('GET', `api/blog/post`);
    yield put(actions.loadedPath(data));
  } catch (error) {
    yield put(errors.errorNotification(error));
  }
}

export function* watchSelectedPath() {
  yield takeEvery(actionTypes.SELECT_PATH, setPath);
}

function* setPath(payload) {
  try {
    const posts = yield blogapi.handleRequest(
      'POST',
      'api/blog/toolpost',
      payload
    );
    yield put(actions.setPathData(posts));
  } catch (error) {
    yield put(errors.errorNotification(error));
  }
}

export function* watchSelectedTheme() {
  yield takeEvery(actionTypes.LOAD_THEME, loadTheme);
}

function* loadTheme() {
  try {
    if (!localStorage.getItem('mode')) {
      localStorage.setItem('mode', 'light');
    } else {
      let dm = localStorage.getItem('mode');
      yield put(actions.setTheme(dm));
    }
  } catch (error) {
    console.log(error);
  }
}
