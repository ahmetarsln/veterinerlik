import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaxRate } from "../../store/actions/taxRateActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import TaxRateForm from "./TaxRateForm";

import * as yup from "yup";

const TaxRateEdit = () => {
  const dispatch = useDispatch();
  const taxRate = useSelector((state) => state.taxRateReducer.currentTaxRate);

  const schema = yup.object({
    taxName: yup.string().required(),
    rate: yup.number().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateTaxRate(e));
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
          initialValues={taxRate}
        >
          <Form>
            <TaxRateForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default TaxRateEdit;