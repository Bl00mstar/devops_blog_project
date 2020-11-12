import { all } from "redux-saga/effects";
import { watchUserIsLogged, watchLoginUser } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([watchLoginUser(), watchUserIsLogged()]);
}
