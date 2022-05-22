import React from "react";
import { Formik, Form } from "formik";
import ProductForm from "./ProductForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../store/actions/productActions";
import { closeModal } from "../../store/actions/modalActions";

const ProductNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    productName: "",
    productPurchasePrice: "",
    productSalesPrice: "",
    productCategory: "",
    productTaxRate: "",
    productImage:"",
  };
  const schema = yup.object({
    productName: yup.string().required(),
    productPurchasePrice: yup.string().required(),
    productSalesPrice: yup.string().required(),
    productCategory: yup.string().required(),
    productTaxRate: yup.string().required(),
    productImage: yup.string().required()
  });
  const handleSubmit = (e) => {
    dispatch(saveProduct(e));
    dispatch(closeModal());
  };

  return (
    <>
      <div className="site-layout-content">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <ProductForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ProductNew;
