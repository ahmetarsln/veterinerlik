import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AppointmentNew from "../AppointmentNew";

const AppointmentNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <AppointmentNew />
    </ModalWrapper>
  );
};
export default AppointmentNewModal;