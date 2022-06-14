import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PutativeNew from "../PutativeNew";

const PutativeNewModal = (props) => {
    return (
        <ModalWrapper title={props.title}>
            <PutativeNew />
        </ModalWrapper>
    );
};
export default PutativeNewModal; 