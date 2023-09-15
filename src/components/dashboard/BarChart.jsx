import React from "react";
import { Bar } from "react-chartjs-2";

import { useSelector } from "react-redux";

export const BarChart = () => {
  const { product } = useSelector((state) => state.product);

  //filter products based on quantity less than 50

  const filteredProducts = product.filter((product) => product.quantity < 50);

  //Extract product Name and quantities for chart
  const productNames = filteredProducts.map((product) => product.productName);
  const productQuantities = filteredProducts.map((product) => product.quantity);
  console.log(productQuantities);

  //create the data object for bar chart

  const Bardata = {
    labels: productNames,
    datasets: [
      {
        label: "Low stock alert",
        data: productQuantities,
        backgroundColor: productQuantities.map((quantity) =>
          quantity < 10 ? "red" : "blue"
        ),
        datalabels: {
          color: "green",
          anchor: "end",
          align: "top",
          font: { weight: "bold" },
        },
      },
    ],
  };

  const baroptions = {
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };
  //Extract product Name and quantities for chart
  return (
    <div>
      <h2>Low Inventory Alert Chart</h2>
      <Bar data={Bardata} options={baroptions} />
    </div>
  );
};
