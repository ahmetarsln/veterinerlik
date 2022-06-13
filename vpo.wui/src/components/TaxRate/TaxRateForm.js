import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="taxName"
        id="taxName"
        display="Vergi Adı"
        component={InputComponent}
      />

      <Field
        type="text"
        name="Rate"
        id="Rate"
        display="vergi oranı"
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