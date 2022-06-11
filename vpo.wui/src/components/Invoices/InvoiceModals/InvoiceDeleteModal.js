import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import InvoiceDelete from "../InvoiceDelete";

const InvoiceDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <InvoiceDelete />
      </ModalWrapper>
    </div>
  );
};
export default InvoiceDeleteModal;
