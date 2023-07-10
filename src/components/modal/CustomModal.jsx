import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "./ModalSlice";

export const CustomModal = ({ heading, children }) => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.modal);

  return (
    <Modal show={showModal} onHide={() => dispatch(setShowModal(false))}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
