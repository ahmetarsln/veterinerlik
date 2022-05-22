import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import SupplierDelete from "../SupplierDelete";

const SupplierDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <SupplierDelete />
      </ModalWrapper>
    </div>
  );
};
export default SupplierDeleteModal;