import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field type="text" name="vaccines" id="vaccines" display="Aşılar" component={InputComponent} />
      <Field type="text" name="payments" id="payments" display="Ödemeler" component={InputComponent} />
      <Field type="text" name="paymentsComplate" id="paymentsComplate" display="Tamamlanmış Ödemeler" component={InputComponent} />

      <Field type="text" name="treatments" id="treatments" display="Tedaviler" component={InputComponent} />
      <Field type="text" name="collections" id="collections" display="Koleksiyonlar " component={InputComponent} />
      <Field type="text" name="collectionsComplate" id="collectionsComplate" display="Koleksiyonlar Tamamlandı" component={InputComponent} />

      <Button variant="success" as="input" size="lg" type="submit" value="Kaydet" />
    </div>
  );
};
export default formsection;
