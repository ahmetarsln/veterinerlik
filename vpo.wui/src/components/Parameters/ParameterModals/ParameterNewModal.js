import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ParameterNew from "../ParameterNew";

const ParameterNewModal = (props) => {
    return (
        <ModalWrapper title={props.title}>
            <ParameterNew />
        </ModalWrapper>
    );
};
export default ParameterNewModal; 