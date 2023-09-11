import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCategoriesAction } from "../category/CatAction";
import {
  addNewProductAction,
  getSelectedProductsAction,
} from "./ProductAction";
import { MainLayout } from "../../components/layout/main-layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../components/firebase_config/Firebase";
import { PRODUCTTABLE } from "../../components/assets/constants/Constant";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const initialState = { status: "inactive", price: 0, name: "" };

const EditProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imageToDelete, setImageToDelete] = useState([]);

  const { category } = useSelector((state) => state.category);
  const { selectedProduct } = useSelector((state) => state.product);

  useEffect(() => {
    !category.length && dispatch(getCategoriesAction());

    form.id !== id && dispatch(getSelectedProductsAction(id));
    selectedProduct.id !== form.id && setForm(selectedProduct);
  }, [dispatch, id, selectedProduct, form.id]);

  const handleOnChanage = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { id, imgUrlList, ...rest } = form;

    // Filter out deleted images from the imgUrlList
    const updatedImgList = imgUrlList.filter(
      (img) => !imageToDelete.includes(img)
    );

    let newImgUrlList = [];

    if (image?.length) {
      const img = image.map((image) => {
        return new Promise((resolve, reject) => {
          // format the image name and path to upload
          const storegeRef = ref(
            storage,
            `/product/images/${Date.now()}-${image.name}`
          );

          //upload the image
          const uploadImg = uploadBytesResumable(storegeRef, image);

          uploadImg.on(
            "state_changed",
            (snapshot) => {
              const percentage =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              setProgress(percentage);
            },
            (error) => {
              console.log(error);
            },
            async () => {
              await getDownloadURL(uploadImg.snapshot.ref).then((url) => {
                resolve(url);
              });
            }
          );
        });
      });

      newImgUrlList = await Promise.all(img);
    }

    // Dispatch the updated form state to your Redux action
    dispatch(
      addNewProductAction({
        ...rest,
        slug: id,
        imgUrlList: [...updatedImgList, ...newImgUrlList], // Use the updated imgUrlList from the form state
      })
    );
  };

  const handleOnImageChange = (e) => {
    const { name, files } = e.target;
    setImage([...files]);
    console.log(image);
  };

  const handOnImageDeleteSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setImageToDelete([...imageToDelete, value]);
    } else {
      const imgLs = imageToDelete.filter((img) => img !== value);
      console.log(imgLs, value);
      setImageToDelete(imgLs);
    }
  };

  const handleOnDelete = async () => {
    const slug = form.id;
    if (window.confirm("Are you sure you wnat to delete this product")) {
      try {
        await deleteDoc(doc(db, PRODUCTTABLE, slug));

        toast.success("The product has been deleted");
        navigate("/product");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const productFields = [
    {
      label: " Product Name",
      name: "productName",
      type: "text",
      placeholder: "Cell Phone",
      required: true,
      value: form.productName,
    },
    {
      label: " Price",
      name: "price",
      type: "number",
      placeholder: "1000",
      required: true,
      value: form.price,
    },
    {
      label: " Quantity",
      name: "quantity",
      type: "number",
      placeholder: "100",
      required: true,
      value: form.quantity,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "text",
      placeholder: "1100",
      required: true,
      value: form.salesPrice,
    },
    {
      label: " Sales Start",
      name: "salesStart",
      type: "date",
      placeholder: "dd/mm/yyyy",
      required: true,
      value: form.salesStart,
    },
    {
      label: " Sales End",
      name: "salesEnd",
      type: "date",
      placeholder: "dd/mm/yyyy",
      required: true,
      value: form.salesEnd,
    },
    {
      label: " Description",
      name: "description",
      type: "text",
      as: "textarea",
      rows: "10",
      placeholder: "Details about the product",
      required: true,
      value: form.description,
    },
  ];

  return (
    <MainLayout className="p-5">
      <Container className="shadow">
        <h4 className="page-title mt-4 text-center">Update Product</h4>
        <hr />
        <div className="  mb-3">
          <Link to="/product">
            <Button variant="secondary">
              <IoIosArrowBack />
            </Button>
          </Link>
        </div>

        <Form onSubmit={handleOnSubmit}>
          <div className="product-form ">
            <Form.Group>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Status"
                name="status"
                onChange={handleOnChanage}
                checked={form.status === "active"}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Select Category</Form.Label>

              <Form.Select
                name="parentCat"
                required={true}
                onChange={handleOnChanage}
              >
                <option value=""> -- select one --</option>

                {category.map((item) => (
                  <option
                    key={item.slug}
                    value={`${item.slug}`}
                    selected={item.slug === form.parentCat}
                  >
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {productFields.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChanage} />
            ))}

            <div className=" d-flex flex-wrap gap-2">
              {selectedProduct?.imgUrlList?.map((img) => (
                <div key={img} className="img-thumbnail">
                  <div>
                    <Form.Check
                      type="radio"
                      name="thumbnail"
                      checked={img === form.thumbnail}
                      onChange={handleOnChanage}
                      value={img}
                    />{" "}
                    <label> Thumbnail</label>
                  </div>

                  <img src={img} alt="" width="100px" />
                  <div className="mt-2">
                    <Form.Check
                      name="delete"
                      label="Delete"
                      value={img}
                      onChange={handOnImageDeleteSelect}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Group className="mt-5">
              <Form.Control
                type="file"
                name="image"
                multiple
                onChange={handleOnImageChange}
              />
            </Form.Group>

            <div className="d-grid py-3">
              <Button type="submit" variant="primary">
                Update Product
              </Button>
            </div>
          </div>
        </Form>

        <div className="py-2 d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete this product
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
};

export default EditProductForm;
