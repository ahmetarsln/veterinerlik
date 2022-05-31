import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ParameterDelete from "../ParameterDelete";

const ParameterDeleteModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <ParameterDelete />
            </ModalWrapper>
        </div>
    );
};
export default ParameterDeleteModal;