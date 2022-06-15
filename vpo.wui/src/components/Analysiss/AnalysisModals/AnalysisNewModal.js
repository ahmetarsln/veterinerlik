import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AnalysisNew from "../AnalysisNew";

const AnalysisNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <AnalysisNew />
    </ModalWrapper>
  );
};
export default AnalysisNewModal;