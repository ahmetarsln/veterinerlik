import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="customerName"
        id="customerName"
        display="Müşteri Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="customerMail"
        id=" customerMail"
        display="Müşteri E-Mail"
        component={InputComponent}
      />
      <Field
        type="text"
        name="customerAdress"
        id="customerAdress"
        display="Müşteri Adresi"
        component={InputComponent}
      />

      <Field
        type="text"
        name="customerTel"
        id="customerTel"
        display="Müşteri Telefonu"
        component={InputComponent}
      />

      <Field
        type="text"
        name="customerNote"
        id="customerNote"
        display="Müşteri Notu"
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