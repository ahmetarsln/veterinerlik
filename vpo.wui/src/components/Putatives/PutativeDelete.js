import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePutative } from "../../store/actions/putativeActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const PutativeDelete = () => {
    const dispatch = useDispatch();
    const putative = useSelector((state) => state.putativeReducer.currentPutative);

    const RemovePutative = (e) => {
        dispatch(deletePutative(e));
        dispatch(closeModal());
    };
    const ClosePutative = (e) => {
        dispatch(closeModal());
    };

    return (
        <>
            <h6>{putative.id}. kayıtı silmek istiyor musunuz?</h6>
            <Container>
                <Row xs="auto">
                    <Col>
                        <Button variant="primary" onClick={() => ClosePutative()}>
                            Hayır
                        </Button>
                    </Col>
                    <Col>
                        {" "}
                        <Button variant="danger" onClick={() => RemovePutative(putative.id)}>
                            Evet
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default PutativeDelete;