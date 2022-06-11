import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import InvoiceNew from "../InvoiceNew";

const InvoiceNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <InvoiceNew />
    </ModalWrapper>
  );
};
export default InvoiceNewModal;
