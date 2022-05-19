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
      <script src="https://unpkg.com/@tabler/core@1.0.0-beta8/dist/js/tabler.min.js"></script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tabler/core@1.0.0-beta8/dist/css/tabler.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tabler/core@1.0.0-beta8/dist/css/tabler-flags.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tabler/core@1.0.0-beta8/dist/css/tabler-payments.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@tabler/core@1.0.0-beta8/dist/css/tabler-vendors.min.css"
      />
    </>
  );
}
export default Dashboard;
