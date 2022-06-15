import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductCategoryEdit from "../ProductCategoryEdit";

const ProductCategoryEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ProductCategoryEdit />
      </ModalWrapper>
    </div>
  );
};
export default ProductCategoryEditModal;
