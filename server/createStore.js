import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./client/reducers";

export default (intailState = {}, axiosInstance) => {
  return createStore(
    reducers,
    intailState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};
