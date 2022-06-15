import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppointment } from "../../store/actions/appointmentActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const AppointmentDelete = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointmentReducer.currentAppointment);

  const RemoveAppointment = (e) => {
    dispatch(deleteAppointment(e));
    dispatch(closeModal());
  };
  const CloseAppointment = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{appointment.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseAppointment()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveAppointment(appointment.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AppointmentDelete;