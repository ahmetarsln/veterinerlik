import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions/userActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik,Form } from "formik";
import UserForm from "./UserForm";

import * as yup from "yup";

const UserEdit = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);

  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
  });

  const handleSubmit = (e) => {
    dispatch(updateUser(e));
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
          initialValues={user}
        >
          <Form>
            <UserForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default UserEdit;