import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import { changeAnalysis, fetchAnalysiss } from "../../store/actions/analysisActions";
import { openModal } from "../../store/actions/modalActions";

const AnalysisList = () => {
  const dispatch = useDispatch();
  const analysiss = useSelector((state) => state.analysisReducer.analysiss);

  const openAnalysisNewModal = () => {
    dispatch(
      openModal({
        modalType: "AnalysisNewModal",
        modalProps: { title: "Yeni Randevu" },
      })
    );
  };

  const openAnalysisEditModal = (e) => {
    dispatch(changeAnalysis(e));
    dispatch(
      openModal({
        modalType: "AnalysisEditModal",
        modalProps: { title: "Randevu Düzenle" },
      })
    );
  };

  useEffect(() => {
    return (
      dispatch(fetchAnalysiss()));
  }, []);

  return (
    <div className="site-layout-content">
      <div>
        <Button variant="outline-primary" onClick={() => openAnalysisNewModal()}>
          Yeni Randevu Ekle
        </Button>
      </div>

      <ListGroup variant="flush">
        {analysiss.map((item) => (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row xs="auto">
                <Col>
                  <Person color="cornflowerblue" size={50} />
                </Col>
                <Col>
                  <p>
                    {item.id} - {item.analysisName}
                  </p>

                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => openAnalysisEditModal(item)}
                  >
                    Düzenle
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default AnalysisList;