import React from "react";
import logo from "../../assets/images/logo.JPG";

export const Footer = () => {
  return (
    <div className="footer text-white text-center" style={{ height: "15vh" }}>
      <div className="mb-4">
        <img src={logo} style={{ width: "115px" }} />
      </div>

      <div>All Rights Reserved | GadgetVerse</div>
    </div>
  );
};
