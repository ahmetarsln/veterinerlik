import React from "react";
import { Formik, Form } from "formik";
import PaymentForm from "./PaymentForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { savePayment } from "../../store/actions/paymentActions";
import { closeModal } from "../../store/actions/modalActions";

const PaymentNew = () => {
    const dispatch = useDispatch();
    const initialValues = {
        paymentNameSurname: "",
        paymentTotal: "",
        paymentDate: "",
        paymentExpiryDate: "",
        paymentType: "",
    };
    const schema = yup.object({
        paymentNameSurname: yup.string().required(),
        paymentTotal: yup.string().required(),
        paymentDate: yup.string().required(),
        paymentExpiryDate: yup.string().required(),
        paymentType: yup.string().required()
    });
    const handleSubmit = (e) => {
        dispatch(savePayment(e));
        dispatch(closeModal());
    };

    return (
        <>
            <div className="site-layout-content">
                <Formik
                    validationSchema={schema}
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        handleSubmit(values);
                    }}
                >
                    <Form>
                        <PaymentForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default PaymentNew;