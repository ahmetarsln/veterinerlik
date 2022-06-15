import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReport } from "../../store/actions/reportActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const ReportDelete = () => {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.reportReducer.currentReport);

  const RemoveReport = (e) => {
    dispatch(deleteReport(e));
    dispatch(closeModal());
  };
  const CloseReport = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{report.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseReport()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveReport(report.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ReportDelete;
