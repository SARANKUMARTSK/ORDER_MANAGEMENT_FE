import React from "react";
import {Chart as ChartJs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from "chart.js";
import { Bar } from "react-chartjs-2";
import PieChart from "./PieChart";

ChartJs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const options = {
  responsive: true,
  Plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Order Management Bar Chart",
    },
  },
};

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [11, 13, 12, 15, 12, 15, 17, 30, 12, 18, 8, 27],
      backgroundColor: "lightgreen",
    },
    {
      label: "Purchase",
      data: [5, 10, 8, 20, 15, 8, 22, 15, 12, 8, 18, 12, 28],
      backgroundColor: "#8ed1fc",
    },
    {
      label: "Return",
      data: [1, 5, 2, 4, 3, 6, 8, 2, 8, 2, 1, 5],
      backgroundColor: "#f78da7 ",
    },
  ],
};
function Chart() {
  return (
    <>
      <div className="row" style={{ maxHeight: "400px" }}>
        <h5 className="dashboard_font">
          Month Wise Activities & Current Stock Details
        </h5>
        <Bar options={options} data={data} />
        <PieChart />
      </div>
    </>
  );
}

export default Chart;
