import React from "react";
import ReacDOM from "react-dom";
import Routes, { routeObj, setRouteObj } from "./Routes";
// import { routeObj } from "./Routes";
import { BrowserRouter, matchRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../createStore";
const store = createStore(window.INTIALSTATE);
const server_data = window.SERVER_DATA;
let matchedRoutes = matchRoutes(routeObj, window.location.pathname);
if (!matchedRoutes) matchedRoutes = [];
console.log(matchedRoutes);

if (matchRoutes.length) {
  if (server_data)
    server_data.map((data, index) => {
      console.log("data", data);
      if (data) {
        matchedRoutes[index].route.element = React.cloneElement(
          matchedRoutes[index].route.element,
          { ...data }
        );
      }
    });
}
ReacDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
