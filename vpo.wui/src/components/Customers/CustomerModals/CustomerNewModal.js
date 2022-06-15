import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CustomerNew from "../CustomerNew";

const CustomerNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <CustomerNew />
    </ModalWrapper>
  );
};
export default CustomerNewModal; 