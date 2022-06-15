import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";

const AnalysisForm = () => {
  return (
    <div>
      <Field
        type="text"
        name="analysisName"
        id="analysisName"
        display="Randevu Adı"
        placeholder="Randevu Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="analysisDescription"
        id="emanalysisDescriptionail"
        display="Tahlil Açıklaması"
        placeholder="Tahlil Açıklaması"
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
export default AnalysisForm;