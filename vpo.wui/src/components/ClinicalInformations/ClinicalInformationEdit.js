import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClinicalInformation } from "../../store/actions/clinicalInformationActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import ClinicalInformationForm from "./ClinicalInformationForm";

import * as yup from "yup";

const ClinicalInformationEdit = () => {
  const dispatch = useDispatch();
  const clinicalInformation = useSelector((state) => state.clinicalInformationReducer.currentClinicalInformation);

  const schema = yup.object({
    clinicalName: yup.string().required(),
    clinicalEposta: yup.string().required(),
    clinicalTaxNo: yup.string().required(),
    clinicalPhone: yup.string().required(),
    clinicAddress: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateClinicalInformation(e));
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
          initialValues={clinicalInformation}
        >
          <Form>
            <ClinicalInformationForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ClinicalInformationEdit;
