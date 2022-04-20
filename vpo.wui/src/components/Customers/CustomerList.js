import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCustomer, fetchCustomers } from "../../store/actions/customerActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const CustomerList = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customerReducer.customers);

  const selectCustomer = (customer) => {
    dispatch(changeCustomer(customer));
  };

  const openCustomerNewModal = () => {
    dispatch(
      openModal({
        modalType: "CustomerNewModal",
        modalProps: { title: "Yeni Müşteri" },
      })
    );
  };
  const openCustomerEditModal = (e) => {
    dispatch(changeCustomer(e));
    dispatch(
      openModal({
        modalType: "CustomerEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openCustomerDeleteModal = (e) => {
    dispatch(changeCustomer(e));
    dispatch(
      openModal({
        modalType: "CustomerDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchCustomers());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openCustomerNewModal()}
          >
            Yeni Evcil Hayvan Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {customers.map((item) => (
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
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => openCustomerEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openCustomerDeleteModal(item)}
                    >
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
export default CustomerList;