import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
    return (
        <div>
            <Field
                type="text"
                name="paymentNameSurname"
                id="paymentNameSurname"
                display="Ad Soyad"
                component={InputComponent}
            />

            <Field
                type="text"
                name="paymentTotal"
                id="paymentTotal"
                display="Fatura Tutarı"
                component={InputComponent}
            />

            <Field
                type="text"
                name="paymentDate"
                id=" paymentDate"
                display="Fatura Tarihi"
                component={InputComponent}
            />
            <Field
                type="text"
                name="paymentExpiryDate"
                id="paymentExpiryDate"
                display="Vade Tarihi"
                component={InputComponent}
            />

            <Field
                type="text"
                name="paymentType"
                id=" paymentType"
                display="Ödeme Tipi"
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