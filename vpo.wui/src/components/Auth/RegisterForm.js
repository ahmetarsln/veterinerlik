import React from "react";
import { Button } from "react-bootstrap";
import { Form, Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";


const RegisterForm = ({ handleSubmit, reset, values, submitCount }) => {
  return (
    <div>
      <h1>Tuber Kayıt</h1>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="username"
          id="username"
          display="Kullanıcı Adı"
          placeholder="Kullanıcı Adı"
          component={InputComponent}
        />
        <Field
          type="email"
          name="email"
          id="email"
          display="Email"
          placeholder="Email"
          component={InputComponent}
        />
        <Field
          type="password"
          name="password"
          id="password"
          display="Şifre"
          placeholder="Şifre"
          component={InputComponent}
        />
        <Button onClick={handleSubmit}>Kayıt Ol</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;