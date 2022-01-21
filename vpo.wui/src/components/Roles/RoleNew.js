import React from "react";
import { Formik, Form } from "formik";
import RoleForm from "./RoleForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveRole } from "../../store/actions/roleActions";
import { closeModal } from "../../store/actions/modalActions";

const RoleNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    description: "",
  };
  const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveRole(e));
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
            <RoleForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default RoleNew;