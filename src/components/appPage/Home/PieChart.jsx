import React from "react";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Tooltip);
const data = {
  labels: [
    "New Order",
    "Packed",
    "Shipped",
    "Delivered",
    "Cancelled",
    "Return",
  ],
  datasets: [
    {
      label: "Current Order Status",
      data: [30, 20, 25, 8, 2, 7],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(68,255,90,0.2)",
        "rgba(225,45,84,0.2)",
        "rgba(78,180,220,0.2)",
      ],
      borderColor: [
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
        "rgba(255,99,132,1)",
        "rgba(68,255,90,1)",
        "rgba(225,45,84,1)",
        "rgba(78,180,220,1)",
      ],
      borderWidth: 1,
    },
  ],
};
function PieChart() {
  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default PieChart;
