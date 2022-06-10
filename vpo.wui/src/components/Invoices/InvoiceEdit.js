import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvoice } from "../../store/actions/invoiceActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import InvoiceForm from "./InvoiceForm";

import * as yup from "yup";

const InvoiceEdit = () => {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoiceReducer.currentInvoice);

  const schema = yup.object({
    invoiceNumberPrefix: yup.string().required(),
    invoiceNoNumber: yup.string().required(),
    invoiceNextNo: yup.string().required(),
    paymentTerms: yup.string().required(),
    invoiceHeader: yup.string().required(),
    invoiceSubtitle: yup.string().required(),
    invoiceDescription: yup.string().required(),
    invoiceFooter: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateInvoice(e));
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
          initialValues={invoice}
        >
          <Form>
            <InvoiceForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default InvoiceEdit;
