import React from "react";
import { Formik, Form } from "formik";
import TaxRateForm from "./TaxRateForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveTaxRate } from "../../store/actions/taxRateActions";
import { closeModal } from "../../store/actions/modalActions";

const TaxRateNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    taxName: "",
    rate: 0.0,
  };
  const schema = yup.object({
    taxName: yup.string().required(),
    rate: yup.number().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveTaxRate(e));
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
            <TaxRateForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default TaxRateNew;