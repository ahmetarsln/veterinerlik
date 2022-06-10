import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field type="text" name="invoiceNumberPrefix" id="invoiceNumberPrefix" display="Fatura No Ön Eki" component={InputComponent} />
      <Field type="text" name="invoiceNoNumber" id="invoiceNoNumber" display="Fatura No Rakam Sayısı" component={InputComponent} />
      <Field type="text" name="invoiceNextNo" id="invoiceNextNo" display="Fatura Sonraki No" component={InputComponent} />

      <Field type="text" name="paymentTerms" id="paymentTerms" display="Ödeme Vadeleri" component={InputComponent} />
      <Field type="text" name="invoiceHeader" id="invoiceHeader" display="Fatura Başlık" component={InputComponent} />
      <Field type="text" name="invoiceSubtitle" id="invoiceSubtitle" display="Fatura Alt Başlık" component={InputComponent} />

      <Field type="text" name="invoiceDescription" id="invoiceDescription" display="Fatura Açıklama" component={InputComponent} />
      <Field type="text" name="invoiceFooter" id="invoiceFooter" display="Fatura Alt Bilgi" component={InputComponent} />
      <Button variant="success" as="input" size="lg" type="submit" value="Kaydet" />
    </div>
  );
};
export default formsection;
