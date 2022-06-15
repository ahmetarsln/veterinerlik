import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnalysis } from "../../store/actions/analysisActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const AnalysisDelete = () => {
  const dispatch = useDispatch();
  const analysis = useSelector((state) => state.analysisReducer.currentAnalysis);

  const RemoveAnalysis = (e) => {
    dispatch(deleteAnalysis(e));
    dispatch(closeModal());
  };
  const CloseAnalysis = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{analysis.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseAnalysis()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveAnalysis(analysis.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AnalysisDelete;