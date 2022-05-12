import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducers";
export default combineReducers({
  news: newsReducer,
  auth: authReducer,
});
