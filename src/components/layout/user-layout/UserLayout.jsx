import React, { useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

export const UserLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  const [sidemenu, setSidemenu] = useState(false);

  const handleOnClick = () => {
    setSidemenu(!sidemenu);
  };

  const isMobile = useMediaQuery({ maxWidth: 450 });

  return (
    <>
      <Header />

      {isMobile ? (
        <div className="user-layout ">
          <Row>
            {sidemenu && (
              <Col
                xs={10}
                className="left "
                onClick={(e) => e.stopPropagation()}
              >
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
                      Admin
                    </Link>
                  </li>
                </ul>
              </Col>
            )}

            <Col xs={1}>
              <div onClick={handleOnClick}>
                <Button
                  style={{ background: "#374151" }}
                  className="shadow-lg mt-1"
                >
                  {sidemenu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </Button>
              </div>
            </Col>

            <Col
              xs={sidemenu ? 0 : 10}
              className="right"
              style={{ display: sidemenu ? "none" : "block" }}
            >
              <div className="main">{children}</div>
            </Col>

            <Col xs={1}></Col>
          </Row>
        </div>
      ) : (
        <Row className="user-layout ">
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
                    Admin
                  </Link>
                </li>
              </ul>
            </Col>
          )}

          <Col md={1}>
            <Button
              onClick={handleOnClick}
              style={{ background: "#374151" }}
              className="shadow-lg mt-1"
            >
              {sidemenu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
            </Button>
          </Col>

          <Col md={sidemenu ? 8 : 10} className="right">
            <div className="main">{children}</div>
          </Col>

          <Col md={1}></Col>
        </Row>
      )}

      <Footer />
    </>
  );
};
