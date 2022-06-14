import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AnalysisEdit from "../AnalysisEdit";

const AnalysisEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <AnalysisEdit />
      </ModalWrapper>
    </div>
  );
};
export default AnalysisEditModal;