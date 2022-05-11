import React from "react";
import { Formik, Form } from "formik";
import SupplierForm from "./SupplierForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveSupplier } from "../../store/actions/supplierActions";
import { closeModal } from "../../store/actions/modalActions";

const SupplierNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    supplierName: "",
    supplierTel: "",
    supplierAuth: "",
    supplierAdress: "",
    supplierCurrency: "",
    supplierMail: "",
  };
  const schema = yup.object({
    supplierName: yup.string().required(),
    supplierTel: yup.string().required(),
    supplierAuth: yup.string().required(),
    supplierAdress: yup.string().required(),
    supplierCurrency: yup.string().required(),
    supplierMail: yup.string().required()
  });
  const handleSubmit = (e) => {
    dispatch(saveSupplier(e));
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
            <SupplierForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default SupplierNew;