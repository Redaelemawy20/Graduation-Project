import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./actions";

import { ToastContainer } from "react-toastify";
import "./App.css";
const App = ({ fetchCurrentUser, app }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <Outlet />
    </>
  );
};
function mapStateToProps({ auth, app }) {
  return { auth, app };
}

function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}
let Element = connect(mapStateToProps, { fetchCurrentUser })(App);
export default {
  element: <Element />,
  loadData,
};
