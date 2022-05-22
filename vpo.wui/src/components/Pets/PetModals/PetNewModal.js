import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PetNew from "../PetNew";

const PetNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <PetNew />
    </ModalWrapper>
  );
};
export default PetNewModal;