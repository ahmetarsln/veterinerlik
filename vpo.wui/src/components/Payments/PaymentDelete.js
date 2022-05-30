import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePayment } from "../../store/actions/paymentActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const PaymentDelete = () => {
    const dispatch = useDispatch();
    const payment = useSelector((state) => state.paymentReducer.currentPayment);

    const RemovePayment = (e) => {
        dispatch(deletePayment(e));
        dispatch(closeModal());
    };
    const ClosePayment = (e) => {
        dispatch(closeModal());
    };

    return (
        <>
            <h6>{payment.id}. kayıtı silmek istiyor musunuz?</h6>
            <Container>
                <Row xs="auto">
                    <Col>
                        <Button variant="primary" onClick={() => ClosePayment()}>
                            Hayır
                        </Button>
                    </Col>
                    <Col>
                        {" "}
                        <Button variant="danger" onClick={() => RemovePayment(payment.id)}>
                            Evet
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default PaymentDelete;