import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";

const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="name"
        id="name"
        display="Name"
        placeholder="name"
        component={InputComponent}
      />
      <Field
        type="text"
        name="description"
        id="description"
        display="Description"
        placeholder="Description"
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
export default formsection;