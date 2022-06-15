import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AnalysisDelete from "../AnalysisDelete";

const AnalysisDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <AnalysisDelete />
      </ModalWrapper>
    </div>
  );
};
export default AnalysisDeleteModal;