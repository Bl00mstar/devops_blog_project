import * as api from "./blog.helpers";
import { put, takeEvery } from "redux-saga/effects";
import blogTypes from "./blog.types";
import * as errors from "../error/error.actions";

import {
  loadPosts,
  loadTools,
  loadTopicsTools,
  loadTopics,
} from "./blog.actions";

export function* watchGetPosts() {
  yield takeEvery(blogTypes.POSTS_LOADING, getPost);
}

function* getPost() {
  try {
    const data = yield api.handleRequest("GET", `api/blog/post`);
    yield put(loadPosts(data));
  } catch (error) {
    yield put(errors.errorNotification(error));
  }
}

export function* watchGetToolsTopics() {
  yield takeEvery(blogTypes.TOPICS_TOOLS_LOADING, getTopicsDescription);
}

function* getTopicsDescription() {
  try {
    const topics = yield api.handleRequest("GET", `api/blog/topics`);
    const tools = yield api.handleRequest("GET", `api/blog/tools`);
    yield put(loadTools(tools));
    yield put(loadTopics(topics));

    const obj = {};

    topics.map(({ id }, index) => {
      const array = [];
      tools.map(({ topic_id, description }) => {
        if (topic_id === id) {
          array.push(description);
        }
      });
      obj[topics[index].description] = array;
    });
    yield put(loadTopicsTools(obj));
  } catch (error) {
    yield put(errors.errorNotification(error));
  }
}
