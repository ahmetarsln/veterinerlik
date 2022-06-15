import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import CurrencyUnitEdit from "../CurrencyUnitEdit";

const CurrencyUnitEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <CurrencyUnitEdit />
      </ModalWrapper>
    </div>
  );
};
export default CurrencyUnitEditModal;
