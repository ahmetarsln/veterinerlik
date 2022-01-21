import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import RoleDelete from "../RoleDelete";

const RoleDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <RoleDelete />
      </ModalWrapper>
    </div>
  );
};
export default RoleDeleteModal;