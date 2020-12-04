import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import errorReducer from "./error/error.reducer";
import blogReducer from "./blog/blog.reducer";
import actionReducer from "./action/action.reducer";

export default combineReducers({
  action: actionReducer,
  user: userReducer,
  error: errorReducer,
  blog: blogReducer,
});
