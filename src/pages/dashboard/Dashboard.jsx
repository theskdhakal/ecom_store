import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch } from "react-redux";
import { getAllClientsAction } from "../../components/user/UserAction";
import { getAllOrderAction } from "../order/OrderAction";
import { getAllReviewAction } from "../reviews/ReviewAction";
import { getAllMessageAction } from "../message/MessageAction";
// import { BarChart } from "../../components/dashboard/BarChart";
import { LineChart } from "../../components/dashboard/LineChart";
import { PieChart } from "../../components/dashboard/PieChart";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientsAction());
    dispatch(getAllOrderAction());
    dispatch(getAllReviewAction());
    dispatch(getAllMessageAction());
  }, [dispatch]);
  return (
    <UserLayout>
      <div className>{/* <LineChart /> */}</div>
      <div>
        <PieChart />
      </div>
    </UserLayout>
  );
};
