import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../../store/actions/customerActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const CustomerDelete = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerReducer.currentCustomer);

  const RemoveCustomer = (e) => {
    dispatch(deleteCustomer(e));
    dispatch(closeModal());
  };
  const CloseCustomer = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{customer.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseCustomer()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveCustomer(customer.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CustomerDelete;