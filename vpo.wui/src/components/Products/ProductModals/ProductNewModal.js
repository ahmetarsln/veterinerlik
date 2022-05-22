import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductNew from "../ProductNew";

const ProductNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <ProductNew />
    </ModalWrapper>
  );
};
export default ProductNewModal;