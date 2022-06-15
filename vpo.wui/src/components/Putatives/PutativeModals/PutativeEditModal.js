import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PutativeEdit from "../PutativeEdit";

const PutativeEditModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <PutativeEdit />
            </ModalWrapper>
        </div>
    );
};
export default PutativeEditModal;