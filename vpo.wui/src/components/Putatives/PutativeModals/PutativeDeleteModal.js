import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PutativeDelete from "../PutativeDelete";

const PutativeDeleteModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <PutativeDelete />
            </ModalWrapper>
        </div>
    );
};
export default PutativeDeleteModal;