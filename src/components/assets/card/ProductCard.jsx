import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "15rem" }} className="mb-3 product-card">
      <Card.Img variant="top" src={product.thumbnail} className="card-image" />
      <hr />
      <Card.Body>
        <Card.Text>
          <p className={`status ${product.status.toLowerCase()}`}>
            {product.status}
          </p>
        </Card.Text>
        <Card.Title className="product-title">
          <h4>
            {product.slug}-{product.parentCat}
          </h4>
        </Card.Title>
        <Card.Text>
          <h5 className="price">
            ${product.salesPrice ? product.salesPrice : product.price}
          </h5>
        </Card.Text>
        <Link to={`/product/${product.slug}`}>
          <Button variant="warning" className="edit-button">
            Edit
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
