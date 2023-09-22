import React, { useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { BiCategoryAlt } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";

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
                      <BiCategoryAlt />
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/product">
                      <BsFillBoxFill /> Product
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/payment">
                      <MdPayments />
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/client">
                      <BsPeopleFill />
                      Client
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/order">
                      <BsCartCheckFill />
                      Order
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/review">
                      <GoCodeReview /> Review
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/message">
                      <AiFillMessage /> Message
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/register">
                      <RiAdminFill /> Admin
                    </Link>
                  </li>
                </ul>
              </Col>
            )}

            <Col xs={2}>
              <div onClick={handleOnClick}>
                <Button
                  style={{
                    background: "#374151",
                    zIndex: "999",
                  }}
                  className="shadow-lg mt-1 "
                >
                  {sidemenu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </Button>
              </div>
            </Col>

            <Col
              xs={sidemenu ? 0 : 9}
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
                    <BiCategoryAlt />
                    Category
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/product">
                    <BsFillBoxFill />
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/payment">
                    <MdPayments />
                    Payment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/client">
                    <BsPeopleFill /> Client
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/order">
                    <BsCartCheckFill />
                    Order
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/review">
                    <GoCodeReview /> Review
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/message">
                    <AiFillMessage /> Message
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/register">
                    <RiAdminFill /> Admin
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
