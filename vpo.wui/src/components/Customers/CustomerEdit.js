import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../../store/actions/customerActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import CustomerForm from "./CustomerForm";

import * as yup from "yup";

const CustomerEdit = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.currentCustomer);

  const schema = yup.object({
    customerName: yup.string().required(),
    customerMail: yup.string().required(),
    customerAdress: yup.string().required(),
    customerTel: yup.string().required(),
    customerNote: yup.string().required()
  });

  const handleSubmit = (e) => {
    dispatch(updateCustomer(e));
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
          initialValues={customer}
        >
          <Form>
            <CustomerForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default CustomerEdit;