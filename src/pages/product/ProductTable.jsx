import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "./ProductAction";

export const ProductTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const { product } = useSelector((state) => state.product);
  console.log(product);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Thumbnail </th>
          <th>Name </th>
          <th>Original-price </th>
          <th>Sales-Price</th>
          <th>sales Start</th>
          <th>sales End</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, i) => (
          <tr key={i}>
            <td>
              <img src={item.thumbnail} alt="" width={"100px"} />
            </td>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.salesPrice}</td>
            <td>{item.salesStart}</td>
            <td>{item.salesEnd}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
