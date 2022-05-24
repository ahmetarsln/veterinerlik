import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field type="text" name="measurementUnitName" id="measurementUnitName" display="Ölçü Birimi Adı" component={InputComponent} />
      <Field type="text" name="unitOfMeasureValue" id="unitOfMeasureValue" display="Ölçü Birimi Değeri " component={InputComponent} />
      <Field
        type="text"
        name="measurementUnitDescription"
        id="measurementUnitDescription"
        display="Ölçü Birimi Açıklama"
        component={InputComponent}
      />

      <Button variant="success" as="input" size="lg" type="submit" value="Kaydet" />
    </div>
  );
};
export default formsection;
