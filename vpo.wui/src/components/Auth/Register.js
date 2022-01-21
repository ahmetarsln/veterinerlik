import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import RegisterForm from "./RegisterForm";
import { register } from "../../store/actions/securityActions";
import * as yup from "yup";
const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.securityReducer.isAuthenticated
  );

  const handleSubmit = (formProps) => {
    const { username, password, email } = formProps;

    dispatch(register(formProps)).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {RegisterForm}
      </Formik>
    </div>
  );
};

export default Register;
