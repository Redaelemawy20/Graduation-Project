import React from "react";
import Aside from "./components/dashboard/Aside";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {" "}
      <div class="page">
        <Aside />
        <div class="page-wrapper">
          <div class="container-xl">
            <div class="row row-cards">
              <div class="col-12">
                <div class="card card-lg">
                  <div class="card-header">
                    <h3 class="card-title">title</h3>
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
