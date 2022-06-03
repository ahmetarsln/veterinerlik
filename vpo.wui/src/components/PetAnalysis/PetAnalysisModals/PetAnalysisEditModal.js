import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetAnalysisEdit from "../PetAnalysisEdit";

const PetAnalysisEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <PetAnalysisEdit />
      </ModalWrapper>
    </div>
  );
};
export default PetAnalysisEditModal;