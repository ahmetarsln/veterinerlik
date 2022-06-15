import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateParameter } from "../../store/actions/parameterActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import ParameterForm from "./ParameterForm";

import * as yup from "yup";

const ParameterEdit = () => {
    const dispatch = useDispatch();
    const parameter = useSelector((state) => state.parameterReducer.currentParameter);

    const schema = yup.object({
        parameterName: yup.string().required(),
        parameterLowerValue: yup.string().required(),
        parameterUpperValue: yup.string().required(),
        parameterDimension: yup.string().required(),
        parameterComment: yup.string().required()
    });

    const handleSubmit = (e) => {
        dispatch(updateParameter(e));
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
                    initialValues={parameter}
                >
                    <Form>
                        <ParameterForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default ParameterEdit;