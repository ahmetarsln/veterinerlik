import React from "react";
import { Formik, Form } from "formik";
import ParameterForm from "./ParameterForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveParameter } from "../../store/actions/parameterActions";
import { closeModal } from "../../store/actions/modalActions";

const ParameterNew = () => {
    const dispatch = useDispatch();
    const initialValues = {
        parameterName: "",
        parameterLowerValue: "",
        parameterUpperValue: "",
        parameterDimension: "",
        parameterComment: "",
    };
    const schema = yup.object({
        parameterName: yup.string().required(),
        parameterLowerValue: yup.string().required(),
        parameterUpperValue: yup.string().required(),
        parameterDimension: yup.string().required(),
        parameterComment: yup.string().required()
    });
    const handleSubmit = (e) => {
        dispatch(saveParameter(e));
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
                        <ParameterForm />
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default ParameterNew;