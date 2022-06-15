import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import TaxRateEdit from "../TaxRateEdit";

const TaxRateEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <TaxRateEdit />
      </ModalWrapper>
    </div>
  );
};
export default TaxRateEditModal;