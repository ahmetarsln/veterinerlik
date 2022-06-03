import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";

const PetAnalysisForm = () => {
  return (
    <div>
      <Field
        type="text"
        name="petName"
        id="petName"
        display="Pet Adı"
        placeholder="Pet Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="PetOwnerName"
        id="PetOwnerName"
        display="Pet Sahibi Adı"
        placeholder="Pet Sahibi Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="AnalysisStatement"
        id="AnalysisStatement"
        display="Tahlil Açıklaması"
        placeholder="Tahlil Açıklaması"
        component={InputComponent}
      />
      <Field
        type="text"
        name="AnalysisDateTime"
        id="AnalysisDateTime"
        display="Tahlil Tarihi"
        placeholder="Tahlil Tarihi"
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
export default PetAnalysisForm;