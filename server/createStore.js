import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./client/newsReducers";
export default (intailState = {}) => {
  return createStore(reducers, intailState, applyMiddleware(thunk));
};
