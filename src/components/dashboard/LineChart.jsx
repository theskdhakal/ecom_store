import React from "react";
import { Line } from "react-chartjs-2";
import { chartJS as chart } from "chart.js/auto";
import { useSelector } from "react-redux";

export const LineChart = () => {
  const { order } = useSelector((state) => state.order);

  const orderData = order.map((item) => ({
    date: new Date(item.orderDate),
    amount: item.totalAmount,
  }));
  //sort the data by date in ascending order
  orderData.sort((a, b) => a.date - b.date);

  //Extract the "orderDate" and "orderAmount" attribute from orders

  const orderDates = orderData.map((item) => item.date);
  const orderAmount = orderData.map((item) => item.amount);

  // *****************line chart****************
  //create the data object for the chart

  const LineData = {
    labels: orderDates.map((date) => date.toLocaleDateString()), // x-axis
    datasets: [
      {
        label: " Sales Overview",
        data: orderAmount, //y-axis
        borderColor: "green",
        backgroundColor: "rgba(024,206,145,0.8)", // fill color
        spanGaps: true,
      },
    ],
  };

  return <Line data={LineData} />;
};
