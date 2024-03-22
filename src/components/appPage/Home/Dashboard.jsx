import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="dashboard" id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
