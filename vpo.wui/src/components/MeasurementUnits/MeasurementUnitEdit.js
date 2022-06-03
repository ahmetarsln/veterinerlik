import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMeasurementUnit } from "../../store/actions/measurementUnitActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import MeasurementUnitForm from "./MeasurementUnitForm";

import * as yup from "yup";

const MeasurementUnitEdit = () => {
  const dispatch = useDispatch();
  const measurementUnit = useSelector((state) => state.measurementUnitReducer.currentMeasurementUnit);

  const schema = yup.object({
    measurementUnitName: yup.string().required(),
    unitOfMeasureValue: yup.string().required(),
    measurementUnitDescription: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateMeasurementUnit(e));
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
          initialValues={measurementUnit}
        >
          <Form>
            <MeasurementUnitForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default MeasurementUnitEdit;
