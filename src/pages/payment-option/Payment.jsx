import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Container, Form, ProgressBar } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { PaymentTable } from "./PaymentTable";
import { useDispatch } from "react-redux";
import { storage } from "../../components/firebase_config/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import slugify from "slugify";
import { addNewPaymentAction } from "./paymentAction";

export const Payment = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState();
  const [images, setImages] = useState();
  const [progress, setProgress] = useState();

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form.paymentName);

    const slug = slugify(form.paymentName, {
      trim: true,
      lower: true,
    });

    console.log(images);

    //uploading the product image
    if (images) {
      //creating the file upload path

      const storageRef = ref(
        storage,
        `/payment/images/${Date.now()}-${images.name}`
      );

      //upload image to firebase

      const uploadImage = uploadBytesResumable(storageRef, images);

      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          toast.error(error.message);
        },

        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            console.log(url);
            dispatch(addNewPaymentAction({ slug, ...form, thumbnail: url }));
          });
        }
      );
    }

    dispatch(addNewPaymentAction({ ...form, slug }));
  };

  const handleOnImageChange = (e) => {
    const { files } = e.target;
    setImages(files[0]);
  };
  const newPayment = [
    {
      label: "Name",
      name: "paymentName",
      type: "text",
      placeholder: "credit-card",
      required: true,
    },
  ];
  return (
    <UserLayout>
      <h5 className="title mt-4">Payment</h5>
      <hr />
      {/* form   */}
      <div className="d-flex justify-content-center align-item-center">
        <Form
          className="border p-5 rounded m-3 shadow-lg"
          style={{ width: "60vw" }}
          onSubmit={handleOnSubmit}
        >
          <h2>Add Payment Methods</h2>
          <hr />
          <Row>
            <Col className="pt-4">
              {" "}
              <Form.Group>
                <label htmlFor="">Status</label>
                <Form.Select name="status" required onChange={handleOnChange}>
                  <option value="">-- select --</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <div className="mt-3">
                {newPayment.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}
              </div>
            </Col>
            <Col className="mt-5">
              <Form.Group>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleOnImageChange}
                />
              </Form.Group>
              <ProgressBar striped variant="success" />
            </Col>
            <Col className="pt-5 ">
              <div className="d-grid ">
                <Button variant="primary" type="submit">
                  Add New Payment!
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <Container className="mt-5 p-5 shadow-lg">
        <PaymentTable />
      </Container>
    </UserLayout>
  );
};
