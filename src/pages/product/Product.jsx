import React from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Product = () => {
  return (
    <UserLayout>
      <div>Product</div>

      <hr />
      <div className="text-end mb-3">
        <Link to="/">
          <Button variant="primary">+Add New Product</Button>
        </Link>
      </div>
    </UserLayout>
  );
};
