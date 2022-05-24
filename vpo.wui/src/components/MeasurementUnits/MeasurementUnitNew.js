import React from "react";
import { Formik, Form } from "formik";
import MeasurementUnitForm from "./MeasurementUnitForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveMeasurementUnit } from "../../store/actions/measurementUnitActions";
import { closeModal } from "../../store/actions/modalActions";

const MeasurementUnitNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    measurementUnitName: "",
    unitOfMeasureValue: "",
    measurementUnitDescription: "",
  };
  const schema = yup.object({
    measurementUnitName: yup.string().required(),
    unitOfMeasureValue: yup.string().required(),
    measurementUnitDescription: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveMeasurementUnit(e));
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
            <MeasurementUnitForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default MeasurementUnitNew;
