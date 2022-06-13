import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ClinicalInformationNew from "../ClinicalInformationNew";

const ClinicalInformationNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <ClinicalInformationNew />
    </ModalWrapper>
  );
};
export default ClinicalInformationNewModal;
