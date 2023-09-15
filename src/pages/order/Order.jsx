import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { format } from "date-fns";
import { setShowModal } from "../../components/modal/ModalSlice";
import { CustomModal } from "../../components/modal/CustomModal";
import { EditOrder } from "./EditOrder";
import classnames from "classnames";

export const Order = () => {
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState({});

  const { order } = useSelector((state) => state.order);

  const handleOnEdit = (item) => {
    setSelectedOrder(item);
    dispatch(setShowModal(true));
  };

  const getOrderStatusClass = (orderStatus) => {
    switch (orderStatus) {
      case "pending":
        return "bg-warning";
      case "processing":
        return "bg-primary";
      case "shipped":
        return "bg-info";
      case "delivered":
        return "bg-success";
      case "cancelled":
        return "bg-danger";
    }
  };
  return (
    <UserLayout>
      {selectedOrder.id && (
        <CustomModal heading="Update Order">
          <EditOrder editOrder={selectedOrder} />
        </CustomModal>
      )}
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
                <td>
                  <span
                    className={classnames(
                      "text-black mb-1  rounded p-1 ",
                      getOrderStatusClass(item.orderStatus)
                    )}
                  >
                    {item.orderStatus}
                  </span>
                </td>
                <td>
                  <Button
                    variant="warning"
                    className="d-grid "
                    onClick={() => {
                      handleOnEdit(item);
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
