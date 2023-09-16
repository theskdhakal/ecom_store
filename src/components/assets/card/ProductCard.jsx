import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  console.log(product.thumbnail);
  return (
    <Card style={{ width: "15rem" }} className=" mb-2">
      <Card.Img variant="top" src={product.thumbnail} className="card-image" />
      <hr />
      <Card.Body>
        <Card.Text>
          <p>{product.status}</p>
        </Card.Text>
        <Card.Title className="my-3 ">
          <h4>
            {product.slug}-{product.parentCat}
          </h4>
        </Card.Title>
        <Card.Text>
          <h5>${product.salesPrice ? product.salesPrice : product.price}</h5>
        </Card.Text>
        <Link to={`/product/${product.slug}`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
