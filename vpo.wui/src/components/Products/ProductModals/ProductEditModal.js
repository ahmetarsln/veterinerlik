import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ProductEdit from "../ProductEdit";

const ProductEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ProductEdit />
      </ModalWrapper>
    </div>
  );
};
export default ProductEditModal;
