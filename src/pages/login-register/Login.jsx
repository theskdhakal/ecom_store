import React from "react";
import { MainLayout } from "../../components/layout/main-layout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const Login = () => {
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
        >
          <Form.Text className="text-center ">
            <h2>Welcome Back !</h2>
          </Form.Text>

          <div className="mt-5">
            {input.map((item, i) => (
              <CustomInput key={i} {...item} />
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
