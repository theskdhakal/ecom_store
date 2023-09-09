import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch } from "react-redux";
import { getAllClientsAction } from "../../components/user/UserAction";
import { getAllOrderAction } from "../order/OrderAction";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientsAction());
    dispatch(getAllOrderAction());
  }, [dispatch]);
  return (
    <UserLayout>
      <div>Dashboard</div>
    </UserLayout>
  );
};
