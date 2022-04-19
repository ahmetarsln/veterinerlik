import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/productActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import ProductForm from "./ProductForm";

import * as yup from "yup";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.currentProduct);

  const schema = yup.object({
    productName: yup.string().required(),
    productPurchasePrice: yup.string().required(),
    productSalesPrice: yup.string().required(),
    productCategory: yup.string().required(),
    productTaxRate: yup.string().required(),
    productImage: yup.string().required()
  });

  const handleSubmit = (e) => {
    dispatch(updateProduct(e));
    dispatch(closeModal());
  };

  return (
    <>
      <div className="site-layout-content">
        <Formik
          validationSchema={schema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
          initialValues={product}
        >
          <Form>
            <ProductForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ProductEdit;
