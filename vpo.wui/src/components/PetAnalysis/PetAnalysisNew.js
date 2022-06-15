import React from "react";
import { Formik, Form } from "formik";
import PetAnalysisForm from "./PetAnalysisForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { savePetAnalysis } from "../../store/actions/petAnalysisActions";
import { closeModal } from "../../store/actions/modalActions";

const PetAnalysisNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    petName: "",
    PetOwnerName: "",
    AnalysisStatement: "",
    AnalysisDateTime: "",
  };
  const schema = yup.object({
    petName: yup.string().required(),
    PetOwnerName: yup.string().required(),
    AnalysisStatement: yup.string().required(),
    AnalysisDateTime: yup.date().required(),
  });
  const handleSubmit = (e) => {
    dispatch(savePetAnalysis(e));
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
            <PetAnalysisForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default PetAnalysisNew;