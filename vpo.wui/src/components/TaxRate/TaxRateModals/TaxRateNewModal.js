import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import TaxRateNew from "../TaxRateNew";

const TaxRateNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <TaxRateNew />
    </ModalWrapper>
  );
};
export default TaxRateNewModal; 