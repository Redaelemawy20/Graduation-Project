import React from "react";
import ReacDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
ReacDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
