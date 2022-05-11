import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="supplierName"
        id="supplierName"
        display="Firma Adı"
        component={InputComponent}
      />

      <Field
        type="text"
        name="supplierTel"
        id="supplierTel"
        display="Firma Telefon"
        component={InputComponent}
      />

      <Field
        type="text"
        name="supplierAuth"
        id=" supplierAuth"
        display="Firma Yetkilisi"
        component={InputComponent}
      />
      <Field
        type="text"
        name="supplierAdress"
        id="supplierAdress"
        display="Firma Adresi"
        component={InputComponent}
      />
      <Field
        type="text"
        name="supplierCurrency"
        id="supplierCurrency"
        display="Firma Para Birimi"
        component={InputComponent}
      />

      <Field
        type="text"
        name="supplierMail"
        id=" supplierMail"
        display="Firma E-Mail"
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