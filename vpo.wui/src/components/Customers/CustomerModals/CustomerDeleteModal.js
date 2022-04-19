import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CustomerDelete from "../CustomerDelete";

const CustomerDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <CustomerDelete />
      </ModalWrapper>
    </div>
  );
};
export default CustomerDeleteModal;