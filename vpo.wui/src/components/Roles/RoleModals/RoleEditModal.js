import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import RoleEdit from "../RoleEdit";

const RoleEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <RoleEdit />
      </ModalWrapper>
    </div>
  );
};
export default RoleEditModal;