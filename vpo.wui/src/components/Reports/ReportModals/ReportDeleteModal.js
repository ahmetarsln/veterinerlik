import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ReportDelete from "../ReportDelete";

const ReportDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ReportDelete />
      </ModalWrapper>
    </div>
  );
};
export default ReportDeleteModal;
