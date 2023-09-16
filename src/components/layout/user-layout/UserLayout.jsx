import React, { useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

export const UserLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  const [sidemenu, setSidemenu] = useState(true);

  const handleOnClick = () => {
    setSidemenu(!sidemenu);
  };

  return (
    <>
      <Header />

      <Row className="user-layout">
        {sidemenu && (
          <Col md={2} className="left " onClick={(e) => e.stopPropagation()}>
            <h5 className="px-5">
              {user.lName}&nbsp;{user.fName}
            </h5>
            <hr />
            <ul className={`d-grid gap-3`}>
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
              <li>
                <Link className="nav-link" to="/message">
                  Message
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/register">
                  Admin Registration
                </Link>
              </li>
            </ul>
          </Col>
        )}

        <Col md={1}></Col>

        <Col md={sidemenu ? 8 : 10} className="right">
          <Button
            onClick={handleOnClick}
            style={{ background: "#374151" }}
            className="shadow-lg mt-1"
          >
            {sidemenu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </Button>
          <div className="main">{children}</div>
        </Col>

        <Col md={1}></Col>
      </Row>

      <Footer />
    </>
  );
};
