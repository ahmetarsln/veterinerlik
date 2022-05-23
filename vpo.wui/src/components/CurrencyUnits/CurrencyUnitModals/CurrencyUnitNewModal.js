import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CurrencyUnitNew from "../CurrencyUnitNew";

const CurrencyUnitNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <CurrencyUnitNew />
    </ModalWrapper>
  );
};
export default CurrencyUnitNewModal;