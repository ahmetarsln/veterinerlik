import React from "react";
import { Formik, Form } from "formik";
import ClinicalInformationForm from "./ClinicalInformationForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveClinicalInformation } from "../../store/actions/clinicalInformationActions";
import { closeModal } from "../../store/actions/modalActions";

const ClinicalInformationNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    clinicalName: "",
    clinicalEposta: "",
    clinicalTaxNo: "",
    clinicalPhone: "",
    clinicAddress: "",
  };
  const schema = yup.object({
    clinicalName: yup.string().required(),
    clinicalEposta: yup.string().required(),
    clinicalTaxNo: yup.string().required(),
    clinicalPhone: yup.string().required(),
    clinicAddress: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveClinicalInformation(e));
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
            <ClinicalInformationForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ClinicalInformationNew;
