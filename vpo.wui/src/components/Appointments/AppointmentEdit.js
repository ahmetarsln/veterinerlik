import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointment } from "../../store/actions/appointmentActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik,Form } from "formik";
import AppointmentForm from "./AppointmentForm";

import * as yup from "yup";

const AppointmentEdit = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointmentReducer.currentAppointment);

  const schema = yup.object({
    appointmentName: yup.string().required(),
    email: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateAppointment(e));
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
          initialValues={appointment}
        >
          <Form>
            <AppointmentForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default AppointmentEdit;