import React from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { ProductTable } from "./ProductTable";

export const Product = () => {
  return (
    <UserLayout>
      <h5 className="title">Product</h5>

      <hr />
      <div className="text-end mb-3">
        <Link to="/">
          <Button variant="primary">+Add New Product</Button>
        </Link>
      </div>
      <Container className="shadow-lg p-3 ">
        <ProductTable />
      </Container>
    </UserLayout>
  );
};
