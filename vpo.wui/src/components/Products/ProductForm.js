import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
  return (
    <div>
      <Field
        type="text"
        name="productName"
        id="productName"
        display="Ürünün Adı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="productPurchasePrice"
        id="productPurchasePrice"
        display="Ürünün Alış Fiyatı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="productSalesPrice"
        id="productSalesPrice"
        display="Ürünün Satış Fiyatı"
        component={InputComponent}
      />

      <Field
        type="text"
        name="productCategory"
        id="productCategory"
        display="Ürünün Katagorisi"
        component={InputComponent}
      />
      <Field
        type="text"
        name="productTaxRate"
        id="productTaxRate"
        display="Ürünün Vergi Oranı"
        component={InputComponent}
      />
      <Field
        type="text"
        name="productImage"
        id="productImage"
        display="Ürünün Fotoğrafı"
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
