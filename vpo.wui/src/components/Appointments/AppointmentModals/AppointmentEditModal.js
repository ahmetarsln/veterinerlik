import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import AppointmentEdit from "../AppointmentEdit";

const AppointmentEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <AppointmentEdit />
      </ModalWrapper>
    </div>
  );
};
export default AppointmentEditModal;