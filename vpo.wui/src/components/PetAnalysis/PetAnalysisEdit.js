import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePetAnalysis } from "../../store/actions/petAnalysisActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import PetAnalysisForm from "./PetAnalysisForm";

import * as yup from "yup";

const PetAnalysisEdit = () => {
  const dispatch = useDispatch();
  const petAnalysis = useSelector((state) => state.petAnalysisReducer.currentPetAnalysis);

  const schema = yup.object({
    petName: yup.string().required(),
    PetOwnerName: yup.string().required(),
    AnalysisStatement: yup.string().required(),
    AnalysisDateTime: yup.date().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updatePetAnalysis(e));
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
          initialValues={petAnalysis}
        >
          <Form>
            <PetAnalysisForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default PetAnalysisEdit;