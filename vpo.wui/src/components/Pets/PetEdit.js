import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePet } from "../../store/actions/petActions";
import { closeModal } from "../../store/actions/modalActions";
import { Formik, Form } from "formik";
import PetForm from "./PetForm";

import * as yup from "yup";

const PetEdit = () => {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.petReducer.currentPet);

  const schema = yup.object({
    petOwner: yup.string().required(),
    petName: yup.string().required(),
    petType: yup.string().required(),
    petBreed: yup.string().required(),
    petDateOfBirth: yup.string().required()
  });

  const handleSubmit = (e) => {
    dispatch(updatePet(e));
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
          initialValues={pet}
        >
          <Form>
            <PetForm />
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default PetEdit;
