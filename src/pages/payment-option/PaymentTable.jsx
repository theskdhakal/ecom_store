import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaymentAction } from "./paymentAction";
import { CustomModal } from "../../components/modal/CustomModal";
import { EditPayment } from "./EditPayment";
import { setShowModal } from "../../components/modal/ModalSlice";

export const PaymentTable = () => {
  const dispatch = useDispatch();
  const [selectedPayment, setSelectedPayment] = useState({});
  const { payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getAllPaymentAction());
  }, [dispatch]);

  const handleOnEdit = (item) => {
    setSelectedPayment(item);
    dispatch(setShowModal(true));
  };
  return (
    <>
      {selectedPayment.slug && (
        <CustomModal heading="update Payment-option">
          <EditPayment editPayment={selectedPayment} />
        </CustomModal>
      )}
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
                <Button
                  variant="warning"
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
    </>
  );
};
