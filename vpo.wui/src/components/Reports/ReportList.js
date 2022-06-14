import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeReport, fetchReports } from "../../store/actions/reportActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const ReportList = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportReducer.reports);

  const selectReport = (report) => {
    dispatch(changeReport(report));
  };

  const openReportNewModal = () => {
    dispatch(
      openModal({
        modalType: "ReportNewModal",
        modalProps: { title: "Yeni Rapor" },
      })
    );
  };
  const openReportEditModal = (e) => {
    dispatch(changeReport(e));
    dispatch(
      openModal({
        modalType: "ReportEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openReportDeleteModal = (e) => {
    dispatch(changeReport(e));
    dispatch(
      openModal({
        modalType: "ReportDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchReports());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button variant="outline-primary" onClick={() => openReportNewModal()}>
            Yeni Rapor Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {reports.map((item) => (
            <ListGroup.Item key={item.id}>
              <Container>
                <Row xs="auto">
                  <Col>
                    <Person color="cornflowerblue" size={50} />
                  </Col>
                  <Col>
                    <p>
                      {item.id} - {item.nameSurname}
                    </p>
                  </Col>
                  <Col>
                    <Button size="sm" variant="primary" onClick={() => openReportEditModal(item)}>
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button size="sm" variant="danger" onClick={() => openReportDeleteModal(item)}>
                      Sil
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default ReportList;
