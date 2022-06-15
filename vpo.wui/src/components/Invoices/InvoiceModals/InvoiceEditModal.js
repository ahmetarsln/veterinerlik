import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import InvoiceEdit from "../InvoiceEdit";

const InvoiceEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <InvoiceEdit />
      </ModalWrapper>
    </div>
  );
};
export default InvoiceEditModal;
