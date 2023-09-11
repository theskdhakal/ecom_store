import React from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { format } from "date-fns";

export const Order = () => {
  const { order } = useSelector((state) => state.order);
  return (
    <UserLayout>
      <Container className="mt-5 shadow-lg p-5">
        <h4 className="text-center"> Orders</h4>
        <hr />
        <Table striped bordered hover className="mt-5 ">
          <thead>
            <tr>
              <th>order Date </th>
              <th>Email </th>
              <th>Items-Name</th>
              <th>Order Status </th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, i) => (
              <tr key={i}>
                <td>{format(new Date(item.orderDate), "MM/dd/yyyy")}</td>
                <td>{item.email}</td>
                <td>
                  {item.cart.map((product, index) => (
                    <div key={index}>{product.name}</div>
                  ))}
                </td>
                <td>Processing</td>
                <td>
                  <Button
                    variant="warning"
                    className="d-grid "
                    onClick={() => {
                      // handleOnDelete(item.id);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </UserLayout>
  );
};
