import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import SupplierNew from "../SupplierNew";

const SupplierNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <SupplierNew />
    </ModalWrapper>
  );
};
export default SupplierNewModal; 