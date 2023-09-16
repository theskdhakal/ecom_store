import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientAction } from "../../components/user/UserAction";
import { Button, Container, Table } from "react-bootstrap";

export const Clients = () => {
  const { client } = useSelector((state) => state.user);
  console.log(client);
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      dispatch(deleteClientAction(id));
    }
  };

  return (
    <UserLayout>
      <div className="mt-5 p-1 shadow ">
        <h4 className="text-center"> Clients</h4>
        <hr />

        <div style={{ overflowX: "auto" }}>
          <Table striped hover className="mt-5 ">
            <thead>
              <tr>
                <th>S.N </th>
                <th>First Name </th>
                <th>Last Name </th>
                <th>Email </th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {client.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.fName}</td>
                  <td>{item.lName}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button
                      variant="danger"
                      className="d-grid "
                      onClick={() => {
                        handleOnDelete(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </UserLayout>
  );
};
