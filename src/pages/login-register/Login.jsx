import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/main-layout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/user/UserAction";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/");
  }, [user?.uid]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };
  const input = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sheldon@cooper.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "**********",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-item-center p-5 m-auto register">
        <Form
          style={{ width: "550px" }}
          className="border p-3 rounded m-3 shadow-lg m-5 p-5"
          onSubmit={handleOnSubmit}
        >
          <Form.Text className="text-center ">
            <h2>Welcome Back !</h2>
          </Form.Text>

          <div className="mt-5">
            {input.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
