import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductCategory } from "../../store/actions/productCategoryActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import ProductCategoryForm from "./ProductCategoryForm";

import * as yup from "yup";

const ProductCategoryEdit = () => {
  const dispatch = useDispatch();
  const productCategory = useSelector((state) => state.productCategoryReducer.currentProductCategory);

  const schema = yup.object({
    productCategoryName: yup.string().required(),
  
  });

  const handleSubmit = (e) => {
    dispatch(updateProductCategory(e));
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
          initialValues={productCategory}
        >
          <Form>
            <ProductCategoryForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ProductCategoryEdit;
