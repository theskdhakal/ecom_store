import React, { useState } from "react";
import { UserLayout } from "../../components/layout/user-layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientAction } from "../../components/user/UserAction";
import { Button, Container, Table } from "react-bootstrap";
import { deleteReviewAction } from "./ReviewAction";
import { Rating } from "../../components/rating/Rating";

export const Review = () => {
  const { review } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      dispatch(deleteReviewAction(id));
    }
  };

  return (
    <UserLayout>
      <Container className="mt-5 shadow-lg p-2">
        <h4 className="text-center"> Reviews</h4>
        <hr />
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover className="mt-5 ">
            <thead>
              <tr>
                <th>S.N </th>
                <th>Client Name</th>
                <th>Product Name</th>
                <th>Rating</th>
                <th>Feedback </th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {review.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.clientName}</td>
                  <td>{item.prodName}</td>
                  <td>
                    <Rating rate={item.rating} />
                  </td>
                  <td>{item.feedback}</td>
                  <td>
                    <Button
                      variant="danger"
                      className="d-grid "
                      onClick={() => {
                        handleOnDelete(item.id);
                      }}
                      disabled
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </UserLayout>
  );
};
