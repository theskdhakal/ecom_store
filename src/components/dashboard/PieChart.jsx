import React from "react";
import { chartJS as chart } from "chart.js/auto";

import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";

export const PieChart = () => {
  const { order } = useSelector((state) => state.order);

  //process the data to calculate the counts of each order status

  const orderStatusCounts = {};

  order.forEach((order) => {
    const status = order.orderStatus;
    orderStatusCounts[status] = (orderStatusCounts[status] || 0) + 1;
  });

  //Extract the status labels and counts for the pie chart

  const statusLabels = Object.keys(orderStatusCounts);
  const statusCounts = Object.values(orderStatusCounts);

  //create the data object for pie-chart

  const pieData = {
    labels: statusLabels,
    dataSets: [
      {
        data: statusCounts,
        backgroundColor: [
          "rgba(255,99,132,0.8)", //pending
          "rgba(255,159,64,0.8)", //processing
          "rgba(75,192,192,0.8)", //delivered
          "rgba(255,205,86,0.8)", //shipped
          "rgba(54,162,235,0.8)", //cancelled
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Order Status Distribution</h2>
      <Pie data={pieData} />
    </div>
  );
};
