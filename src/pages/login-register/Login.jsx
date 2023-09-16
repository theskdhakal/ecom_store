import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/main-layout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/user/UserAction";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const Login = () => {
  const [form, setForm] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/");
  }, [user?.uid, navigate]);

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

  const isMobile = useMediaQuery({ maxWidth: 450 });

  return (
    <MainLayout>
      <div className="login-container">
        <Form
          style={{
            width: isMobile ? "86vw" : "555px",
            background: "white",
          }}
          className="border rounded m-3 shadow-lg p-5"
          onSubmit={handleOnSubmit}
        >
          <Form.Text className="text-center ">
            <h2 className="mb-5">Welcome Back!</h2>
          </Form.Text>

          {input.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
