import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import ParameterEdit from "../ParameterEdit";

const ParameterEditModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <ParameterEdit />
            </ModalWrapper>
        </div>
    );
};
export default ParameterEditModal;