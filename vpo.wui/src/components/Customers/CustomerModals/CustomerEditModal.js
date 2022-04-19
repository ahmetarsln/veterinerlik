import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CustomerEdit from "../CustomerEdit";

const CustomerEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <CustomerEdit />
      </ModalWrapper>
    </div>
  );
};
export default CustomerEditModal;