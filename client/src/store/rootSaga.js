import { all } from "redux-saga/effects";
import { watchUserIsLogged, watchLoginUser } from "./user/user.sagas";
import { watchGetPosts, watchGetToolsTopics } from "./blog/blog.sagas";
import { watchSelectedPath, watchLoadingPath } from "./action/action.sagas";

export default function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchUserIsLogged(),
    watchGetPosts(),
    watchGetToolsTopics(),
    watchSelectedPath(),
    watchLoadingPath(),
  ]);
}
