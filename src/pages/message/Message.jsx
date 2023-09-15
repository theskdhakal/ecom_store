import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientAction } from "../../components/user/UserAction";
import { Button, Container, Table } from "react-bootstrap";
import { deleteMessageAction, deleteReviewAction } from "./MessageAction";

export const Message = () => {
  const { message } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      dispatch(deleteMessageAction(id));
    }
  };

  const handleOnReply = (item) => {
    const recipientEmail = item.email;
    <a href="/" />;
  };

  return (
    <UserLayout>
      <Container className="mt-5 shadow-lg p-5">
        <h4 className="text-center"> Messages</h4>
        <hr />
        <Table striped bordered hover className="mt-5 ">
          <thead>
            <tr>
              <th>S.N </th>
              <th>Client Name</th>
              <th>Email</th>
              <th>Message </th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {message.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>

                <td>
                  <a href={`mailto:${item.email}`}>
                    <Button className="d-grid mb-2 w-100">Reply</Button>
                  </a>

                  <Button
                    variant="danger"
                    className="d-grid w-100 "
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
      </Container>
    </UserLayout>
  );
};
