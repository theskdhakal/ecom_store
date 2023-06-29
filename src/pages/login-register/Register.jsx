import React from "react";
import { MainLayout } from "../../components/layout/main-layout/MainLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const Register = () => {
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
  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-item-center p-5 m-auto register">
        <Form
          style={{ width: "550px" }}
          className="border p-3 rounded m-3 shadow-lg m-5 p-5"
        >
          <Form.Text className="text-center ">
            <h2>Please register Admin</h2>
          </Form.Text>

          <div className="mt-5">
            {input.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};