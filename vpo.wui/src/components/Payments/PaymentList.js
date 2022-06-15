import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePayment, fetchPayments } from "../../store/actions/paymentActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const PaymentList = () => {
    const dispatch = useDispatch();
    const payments = useSelector((state) => state.paymentReducer.payments);

    const selectPayment = (payment) => {
        dispatch(changePayment(payment));
    };

    const openPaymentNewModal = () => {
        dispatch(
            openModal({
                modalType: "PaymentNewModal",
                modalProps: { title: "Yeni Ödeme" },
            })
        );
    };
    const openPaymentEditModal = (e) => {
        dispatch(changePayment(e));
        dispatch(
            openModal({
                modalType: "PaymentEditModal",
                modalProps: { title: "Düzenle" },
            })
        );
    };
    const openPaymentDeleteModal = (e) => {
        dispatch(changePayment(e));
        dispatch(
            openModal({
                modalType: "PaymentDeleteModal",
                modalProps: { title: "Sil" },
            })
        );
    };

    useEffect(() => {
        return dispatch(fetchPayments());
    }, []);

    return (
        <div>
            <div className="site-layout-content">
                <div>
                    <Button
                        variant="outline-primary"
                        onClick={() => openPaymentNewModal()}
                    >
                        Yeni Ödeme Ekle
                    </Button>
                </div>

                <ListGroup variant="flush">
                    {payments.map((item) => (
                        <ListGroup.Item key={item.id}>
                            <Container>
                                <Row xs="auto">
                                    <Col>
                                        <Person color="cornflowerblue" size={50} />
                                    </Col>
                                    <Col>
                                        <p>
                                            {item.id} - {item.paymentNameSurname}
                                        </p>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            onClick={() => openPaymentEditModal(item)}
                                        >
                                            Düzenle
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => openPaymentDeleteModal(item)}
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
export default PaymentList;