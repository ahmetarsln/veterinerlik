import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrencyUnit } from "../../store/actions/currencyUnitActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import CurrencyUnitForm from "./CurrencyUnitForm";

import * as yup from "yup";

const CurrencyUnitEdit = () => {
  const dispatch = useDispatch();
  const currencyUnit = useSelector((state) => state.currencyUnitReducer.currentCurrencyUnit);

  const schema = yup.object({
    currencyUnitName: yup.string().required(),
    currencyUnitCode: yup.string().required(),
    currencyUnitRate: yup.string().required(),
    currencyUnitActivityStatus: yup.string().required()
  });

  const handleSubmit = (e) => {
    dispatch(updateCurrencyUnit(e));
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
          initialValues={currencyUnit}
        >
          <Form>
            <CurrencyUnitForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default CurrencyUnitEdit;
