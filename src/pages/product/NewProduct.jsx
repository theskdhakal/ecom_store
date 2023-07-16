import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { Button, Container, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { getCategoriesAction } from "../category/CatAction";
import { addNewProductAction } from "./ProductAction";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../components/firebase_config/Firebase";
import { toast } from "react-toastify";

const initialState = { status: "inactive", price: 0, productName: "" };

export const NewProduct = () => {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    !category.length && dispatch(getCategoriesAction());
  }, [dispatch]);

  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState();
  const [progress, setProgress] = useState(0);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const slug = slugify(form.productName, {
      trim: true,
      lower: true,
    });

    console.log(images);
    // uploading the product image
    if (images) {
      // create file upload path

      const storageRef = ref(
        storage,
        `/product/images/${Date.now()}-${images.name}`
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
            dispatch(addNewProductAction({ slug, ...form, thumbnail: url }));
          });
        }
      );
    }
  };

  const handleOnImageChange = (e) => {
    const { name, files } = e.target;
    console.log(name, files);
    console.log([...files]);

    setImages(files[0]);
    console.log(files[0]);
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

                  {category.map((item) => (
                    <option key={item.slug} value={`${item.slug}`}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {productFields.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
            </Form.Group>
            <Form.Group className="mt-5">
              <Form.Control
                type="file"
                name="image"
                multiple
                onChange={handleOnImageChange}
              />
            </Form.Group>
            <ProgressBar striped variant="success" now={progress} />

            <div className="d-grid mt-3">
              <Button type="submit">Submit New Product</Button>
            </div>
          </Form>
        </Container>
      </div>
    </UserLayout>
  );
};
