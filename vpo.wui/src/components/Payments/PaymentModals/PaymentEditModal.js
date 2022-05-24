import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PaymentEdit from "../PaymentEdit";

const PaymentEditModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <PaymentEdit />
            </ModalWrapper>
        </div>
    );
};
export default PaymentEditModal;