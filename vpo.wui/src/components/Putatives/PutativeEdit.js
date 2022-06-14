import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePutative } from "../../store/actions/putativeActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import PutativeForm from "./PutativeForm";

import * as yup from "yup";

const PutativeEdit = () => {
    const dispatch = useDispatch();
    const putative = useSelector((state) => state.putativeReducer.currentPutative);

    const schema = yup.object({
        currencyUnit: yup.string().required(),
        taxRate: yup.string().required(),
        language: yup.string().required(),
        numberOfRecordsPerPage: yup.string().required()
    });

    const handleSubmit = (e) => {
        dispatch(updatePutative(e));
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
                    initialValues={putative}
                >
                    <Form>
                        <PutativeForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default PutativeEdit;