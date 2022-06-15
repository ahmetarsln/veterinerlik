import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import PaymentDelete from "../PaymentDelete";

const PaymentDeleteModal = (props) => {
    return (
        <div>
            <ModalWrapper title={props.title}>
                <PaymentDelete />
            </ModalWrapper>
        </div>
    );
};
export default PaymentDeleteModal;