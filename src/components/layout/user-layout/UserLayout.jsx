import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Col, Row } from "react-bootstrap";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Row className="user-layout">
        <Col md={2} className="left">
          <h5>user title</h5>
          <hr />
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
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
