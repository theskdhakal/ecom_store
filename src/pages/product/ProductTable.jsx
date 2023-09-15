import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductAction } from "./ProductAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Status</th>
          <th>Name</th>
          <th>Price</th>
          <th>QTY</th>
          <th>Sale Price</th>
          <th>Sale Start Date</th>
          <th>Sale End Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <img src={item.thumbnail} alt="" width={"100px"} />
            </td>
            <td>{item.status}</td>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.salesPrice}</td>
            <td>{item.salesStart}</td>
            <td>{item.salesEnd}</td>
            <td>
              <Link to={`/product/${item.slug}`}>
                <Button variant="warning">Edit</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
