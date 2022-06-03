import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ClinicalInformationDelete from "../ClinicalInformationDelete";

const ClinicalInformationDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ClinicalInformationDelete />
      </ModalWrapper>
    </div>
  );
};
export default ClinicalInformationDeleteModal;
