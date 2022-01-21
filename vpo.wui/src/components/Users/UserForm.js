import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";

const UserForm = () => {
  return (
    <div>
      <Field
        type="text"
        name="userName"
        id="userName"
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
      <Button
        variant="success"
        as="input"
        size="lg"
        type="submit"
        value="Kaydet"
      />
    </div>
  );
};
export default UserForm;