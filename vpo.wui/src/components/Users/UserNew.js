import React from "react";
import { Formik, Form } from "formik";
import UserForm from "./UserForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveUser } from "../../store/actions/userActions";
import { closeModal } from "../../store/actions/modalActions";

const UserNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    userName: "",
    email: "",
  };
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
  });
  const handleSubmit = (e) => {
    dispatch(saveUser(e));
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
            <UserForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default UserNew;