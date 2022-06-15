import React from "react";
import { Formik, Form } from "formik";
import CurrencyUnitForm from "./CurrencyUnitForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveCurrencyUnit } from "../../store/actions/currencyUnitActions";
import { closeModal } from "../../store/actions/modalActions";

const CurrencyUnitNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    currencyUnitName: "",
    currencyUnitCode: "",
    currencyUnitRate: "",
    currencyUnitActivityStatus: ""
  };
  const schema = yup.object({
    currencyUnitName: yup.string().required(),
    currencyUnitCode: yup.string().required(),
    currencyUnitRate: yup.string().required(),
    currencyUnitActivityStatus: yup.string().required()
  });
  const handleSubmit = (e) => {
    dispatch(saveCurrencyUnit(e));
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
            <CurrencyUnitForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default CurrencyUnitNew;
