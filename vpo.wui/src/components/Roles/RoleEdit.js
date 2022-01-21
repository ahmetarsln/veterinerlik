import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRole } from "../../store/actions/roleActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import RoleForm from "./RoleForm";

import * as yup from "yup";

const RoleEdit = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.roleReducer.currentRole);

  const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateRole(e));
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
          initialValues={role}
        >
          <Form>
            <RoleForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default RoleEdit;