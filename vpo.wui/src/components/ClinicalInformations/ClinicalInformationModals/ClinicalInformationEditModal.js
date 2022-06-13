import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ClinicalInformationEdit from "../ClinicalInformationEdit";

const ClinicalInformationEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ClinicalInformationEdit />
      </ModalWrapper>
    </div>
  );
};
export default ClinicalInformationEditModal;
