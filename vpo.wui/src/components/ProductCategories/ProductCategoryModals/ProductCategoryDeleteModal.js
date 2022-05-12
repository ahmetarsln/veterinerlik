import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductCategoryDelete from "../ProductCategoryDelete";

const ProductCategoryDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ProductCategoryDelete />
      </ModalWrapper>
    </div>
  );
};
export default ProductCategoryDeleteModal;
