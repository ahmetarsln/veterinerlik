import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductCategoryNew from "../ProductCategoryNew";

const ProductCategoryNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <ProductCategoryNew />
    </ModalWrapper>
  );
};
export default ProductCategoryNewModal;