import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePet } from "../../store/actions/petActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const PetDelete = () => {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.petReducer.currentPet);

  const RemovePet = (e) => {
    dispatch(deletePet(e));
    dispatch(closeModal());
  };
  const ClosePet = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{pet.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => ClosePet()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemovePet(pet.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PetDelete;
