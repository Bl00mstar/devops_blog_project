import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import errorReducer from "./error/error.reducer";
import blogReducer from "./blog/blog.reducer";

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  blog: blogReducer,
});
