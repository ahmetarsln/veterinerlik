import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetEdit from "../PetEdit";

const PetEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <PetEdit />
      </ModalWrapper>
    </div>
  );
};
export default PetEditModal;
