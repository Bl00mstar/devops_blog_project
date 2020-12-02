import * as api from "./blog.helpers";
import { all, call, put, takeEvery } from "redux-saga/effects";
import blogTypes from "./blog.types";

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
    const data = yield api.getPosts();
    yield put(loadPosts(data.message));
  } catch (error) {
    console.log("b");
  }
}

export function* watchGetToolsTopics() {
  yield takeEvery(blogTypes.TOPICS_TOOLS_LOADING, getTopicsDescription);
}

function* getTopicsDescription() {
  try {
    const topics = yield api.getTopics();
    const tools = yield api.getTools();
    yield put(loadTools(tools.message));
    yield put(loadTopics(topics.message));

    const obj = {};

    topics.message.map(({ id }, index) => {
      const array = [];
      tools.message.map(({ topic_id, description }) => {
        if (topic_id === id) {
          array.push(description);
        }
      });
      obj[topics.message[index].description] = array;
    });
    yield put(loadTopicsTools(obj));
  } catch (error) {
    console.log(error.message);
  }
}
