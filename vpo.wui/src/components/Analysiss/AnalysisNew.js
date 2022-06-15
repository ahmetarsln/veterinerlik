import React from "react";
import { Formik, Form } from "formik";
import AnalysisForm from "./AnalysisForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveAnalysis } from "../../store/actions/analysisActions";
import { closeModal } from "../../store/actions/modalActions";

const AnalysisNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    analysisName: "",
    analysisDescription: "",
  };
  const schema = yup.object({
    analysisName: yup.string().required(),
    analysisDescription: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveAnalysis(e));
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
            <AnalysisForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default AnalysisNew;