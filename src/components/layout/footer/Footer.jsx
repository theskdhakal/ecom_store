import React from "react";
import logo from "../../assets/images/logo.JPG";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="footer text-white text-center fixed bottom-0"
      style={{ height: "auto" }}
    >
      <div className="mb-4">
        <img src={logo} style={{ width: "115px" }} />
      </div>

      <p>
        <Link
          to="https://gadget-store-theskdhakal.vercel.app/"
          className="text-white text-decoration-none"
        >
          Redirect to Store
        </Link>
      </p>

      <h5>All Rights Reserved | Chineko</h5>
    </div>
  );
};
