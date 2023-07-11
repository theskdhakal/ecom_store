import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { CatTable } from "./CatTable";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import { addCategoryAction } from "./CatAction";

export const Category = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const slug = slugify(form.name, {
      trim: true,
      lower: true,
    });
    dispatch(addCategoryAction({ ...form, slug }));
  };

  const categoryField = [
    {
      label: "Category-Name",
      name: "name",
      type: "text",
      placeholder: "Electronic",
      required: true,
    },
  ];
  return (
    <UserLayout>
      <h5 className="title">Category</h5>
      <hr />
      <div className="d-flex justify-content-center align-item-center">
        <Form
          style={{ width: "60vw" }}
          className="border p-3 rounded m-3 shadow-lg m-5 p-5"
          onSubmit={handleOnSubmit}
        >
          <Form.Text className="text-center ">
            <h2>Add new category !</h2>
          </Form.Text>
          <Row className="d-flexjustify-content-between">
            <Col className="pt-4">
              <Form.Group>
                <label htmlFor="">Status</label>
                <Form.Select name="status" required onChange={handleOnChange}>
                  <option value="">----Select----</option>
                  <option value="active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <div className="mt-3">
                {categoryField.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}
              </div>
            </Col>
            <Col className="pt-5" xs={2}>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  +Add{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <Container className="shadow-lg p-2">
        <CatTable />
      </Container>
    </UserLayout>
  );
};
