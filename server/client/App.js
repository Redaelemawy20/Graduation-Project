import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./actions";
const App = (props) => {
  useEffect(() => {
    console.log("app props", props);
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
function mapStateToProps({ auth }) {
  return { auth };
}
function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}
let Element = connect(mapStateToProps, { fetchCurrentUser })(App);
export default {
  element: <Element />,
  loadData,
};
