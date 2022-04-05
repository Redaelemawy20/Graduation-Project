import React from "react";
import ReacDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
function R() {
  const routes = useRoutes(Routes);
  return <>{routes}</>;
}
ReacDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
