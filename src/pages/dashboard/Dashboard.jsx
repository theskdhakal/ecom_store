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
import { Col, Row } from "react-bootstrap";
import { BarChart } from "../../components/dashboard/BarChart";
import { getAllProductAction } from "../product/ProductAction";
import { getCategoriesAction } from "../category/CatAction";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientsAction());
    dispatch(getAllProductAction());
    dispatch(getCategoriesAction());
    dispatch(getAllOrderAction());
    dispatch(getAllReviewAction());
    dispatch(getAllMessageAction());
  }, [dispatch]);
  return (
    <UserLayout>
      <div className="d-flex justify-content-center">
        <h1 className="shadow  text-center d-inline-block px-5">Dashboard</h1>
      </div>
      <Row className="shadow-lg mt-5 p-3">
        <Col md={6}>
          <LineChart />
        </Col>
      </Row>

      <Row className="shadow mt-5">
        <Col md={8}>
          <BarChart />
        </Col>
        <Col md={4}>
          <PieChart />
        </Col>
      </Row>

      <Row></Row>
    </UserLayout>
  );
};
