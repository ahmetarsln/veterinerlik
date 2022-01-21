import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import { login } from "../../store/actions/securityActions";
import * as yup from "yup";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    password: "",
  };

  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const isAuthenticated = useSelector(
    (state) => state.securityReducer.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, []);

  const handleSubmit = (formProps) => {
    const { username, password } = formProps;

    dispatch(login(formProps)).then(() => {
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
        {LoginForm}
      </Formik>
    </div>
  );
};

export default Login;