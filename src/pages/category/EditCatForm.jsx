import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { CatTable } from "./CatTable";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import { addCategoryAction } from "./CatAction";

export const EditCatForm = ({ editCat }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(editCat);
  }, [dispatch, editCat]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addCategoryAction(form));
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
                <label htmlFor="">Status</label>
                <Form.Select name="status" required onChange={handleOnChange}>
                  <option value="">----Select----</option>
                  <option value="active" selected={form.status === "active"}>
                    Active
                  </option>
                  <option
                    value="Inactive"
                    selected={form.status === "inactive"}
                  >
                    Inactive
                  </option>
                </Form.Select>
              </Form.Group>

              <CustomInput
                name="slug"
                required={true}
                value={form.slug}
                onChange={handleOnChange}
                disabled={true}
              />
              <CustomInput
                name="name"
                required={true}
                value={form.name}
                onChange={handleOnChange}
              />

              <div className="d-grid mt-4">
                <Button type="submit">Update Category</Button>
              </div>
              <div className="d-grid mt-4">
                <Button type="submit" variant="danger">
                  Delete Category
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </container>
    </>
  );
};
