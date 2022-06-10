import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteParameter } from "../../store/actions/parameterActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const ParameterDelete = () => {
    const dispatch = useDispatch();
    const parameter = useSelector((state) => state.parameterReducer.currentParameter);

    const RemoveParameter = (e) => {
        dispatch(deleteParameter(e));
        dispatch(closeModal());
    };
    const CloseParameter = (e) => {
        dispatch(closeModal());
    };

    return (
        <>
            <h6>{parameter.id}. kayıtı silmek istiyor musunuz?</h6>
            <Container>
                <Row xs="auto">
                    <Col>
                        <Button variant="primary" onClick={() => CloseParameter()}>
                            Hayır
                        </Button>
                    </Col>
                    <Col>
                        {" "}
                        <Button variant="danger" onClick={() => RemoveParameter(parameter.id)}>
                            Evet
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default ParameterDelete;