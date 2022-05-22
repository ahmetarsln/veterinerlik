import React from "react";
import { Formik, Form } from "formik";
import PetForm from "./PetForm";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { savePet } from "../../store/actions/petActions";
import { closeModal } from "../../store/actions/modalActions";

const PetNew = () => {
  const dispatch = useDispatch();
  const initialValues = {
    petOwner: "",
    petName: "",
    petType: "",
    petBreed: "",
    petDateOfBirth: ""
  };
  const schema = yup.object({
    petOwner: yup.string().required(),
    petName: yup.string().required(),
    petType: yup.string().required(),
    petBreed: yup.string().required(),
    petDateOfBirth: yup.string().required()
  });
  const handleSubmit = (e) => {
    dispatch(savePet(e));
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
            <PetForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default PetNew;
