import React from "react";
import { Formik, Form } from "formik";
import InvoiceForm from "./InvoiceForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveInvoice } from "../../store/actions/invoiceActions";
import { closeModal } from "../../store/actions/modalActions";

const InvoiceNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    invoiceNumberPrefix: "",
    invoiceNoNumber: "",
    invoiceNextNo: "",
    paymentTerms: "",
    invoiceHeader: "",
    invoiceSubtitle: "",
    invoiceDescription: "",
    invoiceFooter: "",
  };
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
    dispatch(saveInvoice(e));
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
            <InvoiceForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default InvoiceNew;
