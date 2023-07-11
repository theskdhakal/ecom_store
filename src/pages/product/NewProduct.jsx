import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { getCategoriesAction } from "../category/CatAction";

export const NewProduct = () => {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const [form, setForm] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const slug = slugify(form.name, {
      trim: true,
      lower: true,
    });
    console.log(slug);
  };

  const productFields = [
    {
      label: " Product Name",
      name: "productName",
      type: "text",
      placeholder: "Cell Phone",
      required: true,
    },
    {
      label: " Price",
      name: "price",
      type: "number",
      placeholder: "1000",
      required: true,
    },
    {
      label: " Quantity",
      name: "quantity",
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "text",
      placeholder: "1100",
      required: true,
    },
    {
      label: " Sales Start",
      name: "salesStart",
      type: "date",
      placeholder: "dd/mm/yyyy",
      required: true,
    },
    {
      label: " Sales End",
      name: "salesEnd",
      type: "date",
      placeholder: "dd/mm/yyyy",
      required: true,
    },
    {
      label: " Description",
      name: "description",
      type: "text",
      as: "textarea",
      rows: "10",
      placeholder: "Details about the product",
      required: true,
    },
  ];
  return (
    <UserLayout>
      <h5 className="title">Add New Product</h5>
      <hr />
      <Link to="/product">
        <Button variant="secondary">
          <IoIosArrowBack />
        </Button>
      </Link>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="shadow-lg m-5 p-5 ">
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mt-5">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Status"
                name="status"
                onChange={handleOnChange}
              />

              <Form.Group className="my-3">
                <Form.Label>Select Category</Form.Label>

                <Form.Select
                  name="parentCat"
                  required={true}
                  onChange={handleOnChange}
                >
                  <option value="">---Select One---</option>

                  {category}
                </Form.Select>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {productFields.map((item, i) => (
                <CustomInput key={i} {...item} />
              ))}
            </Form.Group>
          </Form>
        </Container>
      </div>
    </UserLayout>
  );
};
