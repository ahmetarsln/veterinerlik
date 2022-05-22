import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductDelete from "../ProductDelete";

const ProductDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ProductDelete />
      </ModalWrapper>
    </div>
  );
};
export default ProductDeleteModal;
