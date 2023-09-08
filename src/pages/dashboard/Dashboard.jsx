import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch } from "react-redux";
import { getAllClientsAction } from "../../components/user/UserAction";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientsAction());
  }, [dispatch]);
  return (
    <UserLayout>
      <div>Dashboard</div>
    </UserLayout>
  );
};
