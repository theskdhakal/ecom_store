import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch } from "react-redux";
import {
  getAllClientsAction,
  getUserAction,
} from "../../components/user/UserAction";
import { getAllOrderAction } from "../order/OrderAction";
import { getAllReviewAction } from "../reviews/ReviewAction";
import { getAllMessageAction } from "../message/MessageAction";
import { Chart } from "../../components/chart/Chart";

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
      <div>{/* <Chart /> */}</div>
    </UserLayout>
  );
};
