import React from "react";
import ReacDOM from "react-dom";
import Routes, { routeObj } from "./Routes";
import { BrowserRouter, matchRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../createStore";
import httpService from "../services/httpService";
import TranslationContext from "../TranslationContext";

const axiosInstance = httpService;
const store = createStore(window.INTIALSTATE, axiosInstance);
const server_data = window.SERVER_DATA;
let matchedRoutes = matchRoutes(routeObj, window.location.pathname);
if (!matchedRoutes) matchedRoutes = [];
console.log(matchedRoutes);

if (matchRoutes.length) {
  if (server_data)
    server_data.map((data, index) => {
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
    <TranslationContext.Provider value={window.TRANSLATION}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </TranslationContext.Provider>
  </Provider>,
  document.getElementById("root")
);
