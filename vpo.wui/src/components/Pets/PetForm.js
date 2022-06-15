import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="petOwner"
        id="petOwner"
        display="Ecvil Hayvanın Sahibi"
        component={InputComponent}
      />
      <Field
        type="text"
        name="petName"
        id="petName"
        display="Evcil Hayvanın Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="petType"
        id="petType"
        display="Evcil Hayvanın Türü"
        component={InputComponent}
      />

      <Field
        type="text"
        name="petBreed"
        id="petBreed"
        display="Evcil Hayvanın Cinsi"
        component={InputComponent}
      />
      <Field
        type="text"
        name="petDateOfBirth"
        id="petDateOfBirth"
        display="Evcil Hayvanın Doğum Tarihi"
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
