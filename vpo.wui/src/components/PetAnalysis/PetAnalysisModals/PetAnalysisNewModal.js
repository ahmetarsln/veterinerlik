import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetAnalysisNew from "../PetAnalysisNew";

const PetAnalysisNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <PetAnalysisNew />
    </ModalWrapper>
  );
};
export default PetAnalysisNewModal;