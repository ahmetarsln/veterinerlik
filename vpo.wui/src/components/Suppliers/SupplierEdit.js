import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSupplier } from "../../store/actions/supplierActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import SupplierForm from "./SupplierForm";

import * as yup from "yup";

const SupplierEdit = () => {
  const dispatch = useDispatch();
  const supplier = useSelector((state) => state.supplierReducer.currentSupplier);

  const schema = yup.object({
    supplierName: yup.string().required(),
    supplierTel: yup.string().required(),
    supplierAuth: yup.string().required(),
    supplierAdress: yup.string().required(),
    supplierCurrency: yup.string().required(),
    supplierMail: yup.string().required()
  });

  const handleSubmit = (e) => {
    dispatch(updateSupplier(e));
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
          initialValues={supplier}
        >
          <Form>
            <SupplierForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default SupplierEdit;