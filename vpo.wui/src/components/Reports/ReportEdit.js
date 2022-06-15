import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReport } from "../../store/actions/reportActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import ReportForm from "./ReportForm";

import * as yup from "yup";

const ReportEdit = () => {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.reportReducer.currentReport);

  const schema = yup.object({
    vaccines: yup.string().required(),
    payments: yup.string().required(),
    paymentsComplate: yup.string().required(),
    treatments: yup.string().required(),
    collections: yup.string().required(),
    collectionsComplate: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateReport(e));
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
          initialValues={report}
        >
          <Form>
            <ReportForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ReportEdit;
