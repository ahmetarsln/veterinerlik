import React from "react";
import { Formik, Form } from "formik";
import ProductCategoryForm from "./ProductCategoryForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveProductCategory } from "../../store/actions/productCategoryActions";
import { closeModal } from "../../store/actions/modalActions";

const ProductCategoryNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    productCategoryName: "",

  };
  const schema = yup.object({
    productCategoryName: yup.string().required(),

  });
  const handleSubmit = (e) => {
    dispatch(saveProductCategory(e));
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
            <ProductCategoryForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default ProductCategoryNew;
