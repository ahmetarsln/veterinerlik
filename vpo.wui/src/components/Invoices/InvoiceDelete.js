import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInvoice } from "../../store/actions/invoiceActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const InvoiceDelete = () => {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoiceReducer.currentInvoice);

  const RemoveInvoice = (e) => {
    dispatch(deleteInvoice(e));
    dispatch(closeModal());
  };
  const CloseInvoice = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{invoice.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseInvoice()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveInvoice(invoice.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default InvoiceDelete;
