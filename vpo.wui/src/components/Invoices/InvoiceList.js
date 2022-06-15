import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInvoice, fetchInvoices } from "../../store/actions/invoiceActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const InvoiceList = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoiceReducer.invoices);

  const selectInvoice = (invoice) => {
    dispatch(changeInvoice(invoice));
  };

  const openInvoiceNewModal = () => {
    dispatch(
      openModal({
        modalType: "InvoiceNewModal",
        modalProps: { title: "Yeni Fatura" },
      })
    );
  };
  const openInvoiceEditModal = (e) => {
    dispatch(changeInvoice(e));
    dispatch(
      openModal({
        modalType: "InvoiceEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openInvoiceDeleteModal = (e) => {
    dispatch(changeInvoice(e));
    dispatch(
      openModal({
        modalType: "InvoiceDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchInvoices());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button variant="outline-primary" onClick={() => openInvoiceNewModal()}>
            Yeni Fatura Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {invoices.map((item) => (
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
                    <Button size="sm" variant="primary" onClick={() => openInvoiceEditModal(item)}>
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button size="sm" variant="danger" onClick={() => openInvoiceDeleteModal(item)}>
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
export default InvoiceList;
