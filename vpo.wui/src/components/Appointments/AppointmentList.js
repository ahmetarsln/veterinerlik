import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import { changeAppointment, fetchAppointments } from "../../store/actions/appointmentActions";
import { openModal } from "../../store/actions/modalActions";

const AppointmentList = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointmentReducer.appointments);

  const openAppointmentNewModal = () => {
    dispatch(
      openModal({
        modalType: "AppointmentNewModal",
        modalProps: { title: "Yeni Randevu" },
      })
    );
  };

  const openAppointmentEditModal = (e) => {
    dispatch(changeAppointment(e));
    dispatch(
      openModal({
        modalType: "AppointmentEditModal",
        modalProps: { title: "Randevu Düzenle" },
      })
    );
  };

  useEffect(() => {
    return(
    dispatch(fetchAppointments()));
  }, []);

  return (
    <div className="site-layout-content">
      <div>
        <Button variant="outline-primary" onClick={() => openAppointmentNewModal()}>
          Yeni Randevu Ekle
        </Button>
      </div>

      <ListGroup variant="flush">
        {appointments.map((item) => (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row xs="auto">
                <Col>
                  <Person color="cornflowerblue" size={50} />
                </Col>
                <Col>
                  <p>
                    {item.id} - {item.appointmentName}
                  </p>

                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => openAppointmentEditModal(item)}
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

export default AppointmentList;