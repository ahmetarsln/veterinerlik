import React from "react";
import { Button } from "react-bootstrap";
import { Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";
const formsection = () => {
    return (
        <div>
            <Field
                type="text"
                name="parameterName"
                id="parameterName"
                display="Parametre Adı"
                component={InputComponent}
            />

            <Field
                type="text"
                name="parameterLowerValue"
                id="parameterLowerValue"
                display="Parametre Alt Değeri"
                component={InputComponent}
            />

            <Field
                type="text"
                name="parameterUpperValue"
                id=" parameterUpperValue"
                display="Parametre Üst Değeri"
                component={InputComponent}
            />
            <Field
                type="text"
                name="parameterDimension"
                id="parameterDimension"
                display="Parametre Ölçü Birimi"
                component={InputComponent}
            />
            <Field
                type="text"
                name="parameterComment"
                id="parameterComment"
                display="Parametre Açıklaması"
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