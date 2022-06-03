import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePetAnalysis } from "../../store/actions/petAnalysisActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const PetAnalysisDelete = () => {
  const dispatch = useDispatch();
  const petAnalysis = useSelector((state) => state.petAnalysisReducer.currentPetAnalysis);

  const RemovePetAnalysis = (e) => {
    dispatch(deletePetAnalysis(e));
    dispatch(closeModal());
  };
  const ClosePetAnalysis = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{petAnalysis.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => ClosePetAnalysis()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemovePetAnalysis(petAnalysis.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PetAnalysisDelete;