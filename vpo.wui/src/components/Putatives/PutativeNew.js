import React from "react";
import { Formik, Form } from "formik";
import PutativeForm from "./PutativeForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { savePutative } from "../../store/actions/putativeActions";
import { closeModal } from "../../store/actions/modalActions";

const PutativeNew = () => {
    const dispatch = useDispatch();
    const initialValues = {
        currencyUnit: "",
        taxRate: "",
        language: "",
        numberOfRecordsPerPage: ""
    };
    const schema = yup.object({
        currencyUnit: yup.string().required(),
        taxRate: yup.string().required(),
        language: yup.string().required(),
        numberOfRecordsPerPage: yup.string().required()
    });
    const handleSubmit = (e) => {
        dispatch(savePutative(e));
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
                        <PutativeForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default PutativeNew;