import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import SupplierEdit from "../SupplierEdit";

const SupplierEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <SupplierEdit />
      </ModalWrapper>
    </div>
  );
};
export default SupplierEditModal;