import React from "react";
import Cards from "./Cards";
import Chart from "./Chart";

function Home() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 dashboard_font">Dashboard</h1>
      </div>
      <div className="row container-fluid">
        <Cards />
        <Chart />
      </div>
    </>
  );
}

export default Home;
