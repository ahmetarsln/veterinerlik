import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ReportEdit from "../ReportEdit";

const ReportEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <ReportEdit />
      </ModalWrapper>
    </div>
  );
};
export default ReportEditModal;
