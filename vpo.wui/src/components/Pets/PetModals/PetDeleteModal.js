import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetDelete from "../PetDelete";

const PetDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <PetDelete />
      </ModalWrapper>
    </div>
  );
};
export default PetDeleteModal;
