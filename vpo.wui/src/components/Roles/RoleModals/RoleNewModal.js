import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import RoleNew from "../RoleNew";

const RoleNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <RoleNew />
    </ModalWrapper>
  );
};
export default RoleNewModal;