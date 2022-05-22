import React from "react";
import { Formik, Form } from "formik";
import CustomerForm from "./CustomerForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveCustomer } from "../../store/actions/customerActions";
import { closeModal } from "../../store/actions/modalActions";

const CustomerNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    customerName: "",
    customerMail: "",
    customerAdress: "",
    customerTel: "",
    customerNote: ""
  };
  const schema = yup.object({
    customerName: yup.string().required(),
    customerMail: yup.string().required(),
    customerAdress: yup.string().required(),
    customerTel: yup.string().required(),
    customerNote: yup.string().required()
  });
  const handleSubmit = (e) => {
    dispatch(saveCustomer(e));
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
            <CustomerForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default CustomerNew;