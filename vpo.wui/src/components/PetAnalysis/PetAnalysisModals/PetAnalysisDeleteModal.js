import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetAnalysisDelete from "../PetAnalysisDelete";

const PetAnalysisDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <PetAnalysisDelete />
      </ModalWrapper>
    </div>
  );
};
export default PetAnalysisDeleteModal;