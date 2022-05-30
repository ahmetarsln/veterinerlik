import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../../store/actions/paymentActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import PaymentForm from "./PaymentForm";

import * as yup from "yup";

const PaymentEdit = () => {
    const dispatch = useDispatch();
    const payment = useSelector((state) => state.paymentReducer.currentPayment);

    const schema = yup.object({
        paymentNameSurname: yup.string().required(),
        paymentTotal: yup.string().required(),
        paymentDate: yup.string().required(),
        paymentExpiryDate: yup.string().required(),
        paymentType: yup.string().required()
    });

    const handleSubmit = (e) => {
        dispatch(updatePayment(e));
        dispatch(closeModal());
    };

    return (
        <>
            <div className="site-layout-content">
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        handleSubmit(values);
                    }}
                    initialValues={payment}
                >
                    <Form>
                        <PaymentForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default PaymentEdit;