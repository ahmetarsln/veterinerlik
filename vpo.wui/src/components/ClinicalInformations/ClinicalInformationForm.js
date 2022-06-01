import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field type="text" name="clinicalName" id="clinicalName" display="Klinik Adı" component={InputComponent} />
      <Field type="text" name="clinicalEposta" id="clinicalEposta" display="Klinik E-posta" component={InputComponent} />
      <Field type="text" name="clinicalTaxNo" id="clinicalTaxNo" display="Klinik Vergi No" component={InputComponent} />

      <Field type="text" name="clinicalPhone" id="clinicalPhone" display="Klinik Telefon Numarası" component={InputComponent} />
      <Field type="text" name="clinicAddress" id="clinicAddress" display="Klinik Adresi" component={InputComponent} />

      <Button variant="success" as="input" size="lg" type="submit" value="Kaydet" />
    </div>
  );
};
export default formsection;
