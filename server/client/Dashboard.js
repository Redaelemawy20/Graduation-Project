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
                    <h3 className="card-title">Dashboard</h3>
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
    </>
  );
}
export default Dashboard;
