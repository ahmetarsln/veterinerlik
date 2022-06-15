import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AppointmentDelete from "../AppointmentDelete";

const AppointmentDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <AppointmentDelete />
      </ModalWrapper>
    </div>
  );
};
export default AppointmentDeleteModal;