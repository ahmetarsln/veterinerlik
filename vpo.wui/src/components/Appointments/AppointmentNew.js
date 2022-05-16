import React from "react";
import { Formik, Form } from "formik";
import AppointmentForm from "./AppointmentForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveAppointment } from "../../store/actions/appointmentActions";
import { closeModal } from "../../store/actions/modalActions";

const AppointmentNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    appointmentName: "",
    email: "",
  };
  const schema = yup.object({
    appointmentName: yup.string().required(),
    email: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveAppointment(e));
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
            <AppointmentForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default AppointmentNew;