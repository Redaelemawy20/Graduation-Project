import React from "react";
import Aside from "./components/dashboard/Aside";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <>
      {" "}
      <div className="page">
        <Aside />
        <div className="page-wrapper">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <div className="card card-lg">
                  <div className="card-header">
                    <h3 className="card-title">title</h3>
                  </div>
                  <div>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="http://localhost:3000/tabler.min.js"></script>
      <link rel="stylesheet" href="http://localhost:3000/tabler.min.css" />
      <link
        rel="stylesheet"
        href="http://localhost:3000/tabler-flags.min.css"
      />
      <link
        rel="stylesheet"
        href="http://localhost:3000/tabler-payments.min.css"
      />
      <link
        rel="stylesheet"
        href="http://localhost:3000/tabler-vendors.min.css"
      />
    </>
  );
}
export default Dashboard;
