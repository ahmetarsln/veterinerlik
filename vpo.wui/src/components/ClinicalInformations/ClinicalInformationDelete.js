import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClinicalInformation } from "../../store/actions/clinicalInformationActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const ClinicalInformationDelete = () => {
  const dispatch = useDispatch();
  const clinicalInformation = useSelector((state) => state.clinicalInformationReducer.currentClinicalInformation);

  const RemoveClinicalInformation = (e) => {
    dispatch(deleteClinicalInformation(e));
    dispatch(closeModal());
  };
  const CloseClinicalInformation = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{clinicalInformation.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseClinicalInformation()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveClinicalInformation(clinicalInformation.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ClinicalInformationDelete;
