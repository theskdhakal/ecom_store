import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
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
import { DoughnutChart } from "../../components/dashboard/Doughnut";
import d1 from "../../components/assets/images/dashboard/d1.png";
import d2 from "../../components/assets/images/dashboard/d2.png";
import d3 from "../../components/assets/images/dashboard/d3.png";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { product } = useSelector((state) => state.product);
  const { client } = useSelector((state) => state.user);

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
      <div className="d-flex justify-content-center ">
        <h1 className="shadow  text-center d-inline-block px-5">Dashboard</h1>
      </div>

      <Row>
        <Col md={9} className=" p-2">
          <LineChart />
        </Col>

        <Col md={1}></Col>

        <Col md={2}>
          <Row className="mt-5">
            <div
              className="shadow-lg d-flex rounded justify-content-between p-5 text-white  text-center "
              style={{
                background: "#3471eb",
              }}
            >
              <div>
                <img src={d1} alt="" style={{ width: "65px" }} />
              </div>
              <h5 className="pt-2">
                Categories
                <p>{category.length}</p>
              </h5>
            </div>
          </Row>

          <Row className="mt-5">
            <div
              className="shadow-lg d-flex rounded justify-content-between p-5 text-white  text-center "
              style={{
                background: "#334e5c",
              }}
            >
              <div>
                <img src={d2} alt="" style={{ width: "105px" }} />
              </div>
              <h5 className="pt-2">
                Product
                <p>{product.length}</p>
              </h5>
            </div>
          </Row>

          <Row className="mt-5">
            <div
              className="shadow-lg d-flex rounded justify-content-between p-5 text-white  text-center "
              style={{
                background: "#a87132",
              }}
            >
              <div>
                <img src={d3} alt="" style={{ width: "105px" }} />
              </div>
              <h5 className="pt-2">
                Clients
                <p>{client.length}</p>
              </h5>
            </div>
          </Row>
        </Col>
      </Row>

      <Row className="shadow-lg text-center d-flex justify-content-center mt-5 p-3">
        <Col md={6}>
          <PieChart />
        </Col>
      </Row>

      <Row className="shadow my-5">
        <Col md={8}>
          <BarChart />
        </Col>
        <Col md={4}>
          <DoughnutChart />
        </Col>
      </Row>
    </UserLayout>
  );
};
