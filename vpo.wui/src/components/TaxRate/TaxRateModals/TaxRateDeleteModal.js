import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import TaxRateDelete from "../TaxRateDelete";

const TaxRateDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <TaxRateDelete />
      </ModalWrapper>
    </div>
  );
};
export default TaxRateDeleteModal;