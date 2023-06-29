import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="main">{children}</div>

      <Footer />
    </div>
  );
};
