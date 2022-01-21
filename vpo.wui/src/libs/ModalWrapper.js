import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { closeModal } from "../store/actions/modalActions";

const ModalWrapper = ({ children, title }) => {
  const dispatch = useDispatch();

  const onCloseClick = () => {
    dispatch(closeModal());
  };

  return (
    //<div style={{ display: "block", width: 700, padding: 30 }}>
      <Modal show={true} onHide={onCloseClick}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    //</div>
  );
};

export default ModalWrapper;
