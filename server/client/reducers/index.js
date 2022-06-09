import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducers";
import UiReducer from "./UiReducer";

export default combineReducers({
  news: newsReducer,
  auth: authReducer,
  app: UiReducer,
});
