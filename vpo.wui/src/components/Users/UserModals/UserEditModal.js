import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import UserEdit from "../UserEdit";

const UserEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <UserEdit />
      </ModalWrapper>
    </div>
  );
};
export default UserEditModal;