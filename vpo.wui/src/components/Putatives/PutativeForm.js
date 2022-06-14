import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
    return (
        <div>
            <Field
                type="text"
                name="currencyUnit"
                id="currencyUnit"
                display="Para Birimi"
                component={InputComponent}
            />

            <Field
                type="text"
                name="taxRate"
                id="taxRate"
                display="Vergi Oranı"
                component={InputComponent}
            />

            <Field
                type="text"
                name="language"
                id=" language"
                display="Dil"
                component={InputComponent}
            />
            <Field
                type="text"
                name="numberOfRecordsPerPage"
                id="numberOfRecordsPerPage"
                display="Sayfa Başına Kayıt Sayısı"
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