import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="currencyUnitName"
        id="currencyUnitName"
        display="Para Birimi Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="currencyUnitCode"
        id="currencyUnitCode"
        display="Para Birimi Kodu"
        component={InputComponent}
      />
      <Field
        type="text"
        name="currencyUnitRate"
        id="currencyUnitRate"
        display="Para Birimi Oranı"
        component={InputComponent}
      />

      <Field
        type="text"
        name="currencyUnitActivityStatus"
        id="currencyUnitActivityStatus"
        display="Para Birimi Etkinlik Durumu"
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
