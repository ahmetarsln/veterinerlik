import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnalysis } from "../../store/actions/analysisActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import AnalysisForm from "./AnalysisForm";

import * as yup from "yup";

const AnalysisEdit = () => {
  const dispatch = useDispatch();
  const analysis = useSelector((state) => state.analysisReducer.currentAnalysis);

  const schema = yup.object({
    analysisName: yup.string().required(),
    analysisDescription: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateAnalysis(e));
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
          initialValues={analysis}
        >
          <Form>
            <AnalysisForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default AnalysisEdit;