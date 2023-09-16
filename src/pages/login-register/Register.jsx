import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../components/user/UserAction";
import { Navigate, useNavigate } from "react-router-dom";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useMediaQuery } from "react-responsive";
import { Admin } from "../../components/admin/AdminTable";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isRegistered = await registerUserAction(form);
    isRegistered && navigate("/");
  };
  const input = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sheldon",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Cooper",
      required: true,
    },
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
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*********",
      required: true,
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 450 });

  return (
    <UserLayout>
      <div className="d-flex justify-content-center align-items-center p-1 m-auto">
        <Form
          className={`border p-3 rounded m-3 shadow-lg  p-5 ${
            isMobile ? "w-100 mobile-form" : "w-50 m-5 "
          }`}
          onSubmit={handleOnSubmit}
        >
          <Form.Text className="text-center">
            <h2>Please register Admin</h2>
          </Form.Text>

          <div className="mt-5">
            {input.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </div>
        </Form>
      </div>

      <div className="my-5 shadow">
        <Admin />
      </div>
    </UserLayout>
  );
};
