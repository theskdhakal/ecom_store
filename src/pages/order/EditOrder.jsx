import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import { addNewPaymentAction } from "./paymentAction";

export const EditOrder = ({ editOrder }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(editOrder);
  }, [dispatch, EditPayment]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(updateOrderAction(form));
  };

  return (
    <>
      <container className="d-flex justify-content-center align-item-center">
        <Form
          style={{ width: "60vw" }}
          className="border p-3 rounded m-3 shadow-lg m-5 p-5"
          onSubmit={handleOnSubmit}
        >
          <Row className="d-flexjustify-content-between">
            <Col className="pt-4">
              <Form.Group>
                <label htmlFor="">Order-Status</label>
                <Form.Select name="status" required onChange={handleOnChange}>
                  <option value="">----Select----</option>
                  <option value="pending" selected={form.status === "pending"}>
                    <p className="bg-warning">pending</p>
                  </option>
                  <option value="">----Select----</option>
                  <option
                    value="processing"
                    selected={form.status === "processing"}
                  >
                    <p className="bg-primary">processing</p>
                  </option>
                  <option value="">----Select----</option>
                  <option value="shipped" selected={form.status === "shipped"}>
                    <p className="bg-info">shipped</p>
                  </option>
                  <option value="">----Select----</option>
                  <option
                    value="delivered"
                    selected={form.status === "delivered"}
                  >
                    <p className="bg-success">delivered</p>
                  </option>
                  <option value="">----Select----</option>
                  <option
                    value="cancelled"
                    selected={form.status === "cancelled"}
                  >
                    <p className="bg-danger">cancelled</p>
                  </option>
                </Form.Select>
              </Form.Group>

              <CustomInput
                name="email"
                required={true}
                value={form.email}
                onChange={handleOnChange}
                disabled={true}
              />
              <CustomInput
                name="date"
                required={true}
                value={form.orderDate}
                onChange={handleOnChange}
                disabled={true}
              />

              <div className="d-grid mt-4">
                <Button type="submit">Update Order</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </container>
    </>
  );
};
