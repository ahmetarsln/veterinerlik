import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CurrencyUnitDelete from "../CurrencyUnitDelete";

const CurrencyUnitDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <CurrencyUnitDelete />
      </ModalWrapper>
    </div>
  );
};
export default CurrencyUnitDeleteModal;
