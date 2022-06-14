import React from "react";
import { Formik, Form } from "formik";
import ReportForm from "./ReportForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveReport } from "../../store/actions/reportActions";
import { closeModal } from "../../store/actions/modalActions";

const ReportNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    vaccines: "",
    payments: "",
    paymentsComplate: "",
    treatments: "",
    collections: "",
    collectionsComplate: "",
  };
  const schema = yup.object({
    vaccines: yup.string().required(),
    payments: yup.string().required(),
    paymentsComplate: yup.string().required(),
    treatments: yup.string().required(),
    collections: yup.string().required(),
    collectionsComplate: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveReport(e));
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
            <ReportForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ReportNew;
