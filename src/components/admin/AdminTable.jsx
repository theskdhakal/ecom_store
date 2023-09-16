import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { deleteAdminAction } from "../user/UserAction";

export const Admin = () => {
  const { admin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      dispatch(deleteAdminAction(id));
    }
  };

  return (
    <div className="mt-5 p-1 shadow ">
      <h4 className="text-center"> Admin</h4>
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
            {admin.map((item, i) => (
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
                      // handleOnDelete(item.id);
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
  );
};
