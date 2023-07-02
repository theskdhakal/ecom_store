import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Row className="user-layout">
        <Col md={2} className="left ">
          <h5 className="px-5">user title</h5>
          <hr />
          <ul className=" d-grid gap-3">
            <li>
              <Link to="/category" className="nav-link">
                Category
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/payment">
                Payment
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/client">
                Client
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/order">
                Order
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </li>
          </ul>
        </Col>

        <Col className="right">
          <div className="main">{children}</div>
        </Col>
      </Row>

      <Footer />
    </>
  );
};
