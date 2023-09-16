import React from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = () => {
  const { product } = useSelector((state) => state.product);

  const activeProductCount = product.filter(
    (item) => item.status === "active"
  ).length;
  const inactiveProductCount = product.filter(
    (item) => item.status === "inactive"
  ).length;

  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [activeProductCount, inactiveProductCount],
        backgroundColor: ["green", "red"],
      },
    ],
  };

  return (
    <div>
      <h2>Product Status</h2>
      <Doughnut data={data} />
    </div>
  );
};
