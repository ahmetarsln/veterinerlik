import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PaymentNew from "../PaymentNew";

const PaymentNewModal = (props) => {
    return (
        <ModalWrapper title={props.title}>
            <PaymentNew />
        </ModalWrapper>
    );
};
export default PaymentNewModal; 