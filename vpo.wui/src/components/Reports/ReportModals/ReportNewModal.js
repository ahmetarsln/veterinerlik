import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ReportNew from "../ReportNew";

const ReportNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <ReportNew />
    </ModalWrapper>
  );
};
export default ReportNewModal;
