import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaymentAction } from "./paymentAction";

export const PaymentTable = () => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getAllPaymentAction());
  }, [dispatch]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payment.map((item, i) => (
          <tr key={item.slug}>
            <td>
              <img src={item.thumbnail} alt="" width="60px" />
            </td>
            <td>{item.paymentName}</td>
            <td>{item.status}</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
