import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeParameter, fetchParameters } from "../../store/actions/parameterActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const ParameterList = () => {
    const dispatch = useDispatch();
    const parameters = useSelector((state) => state.parameterReducer.parameters);

    const selectParameter = (parameter) => {
        dispatch(changeParameter(parameter));
    };

    const openParameterNewModal = () => {
        dispatch(
            openModal({
                modalType: "ParameterNewModal",
                modalProps: { title: "Yeni Parametre" },
            })
        );
    };
    const openParameterEditModal = (e) => {
        dispatch(changeParameter(e));
        dispatch(
            openModal({
                modalType: "ParameterEditModal",
                modalProps: { title: "Düzenle" },
            })
        );
    };
    const openParameterDeleteModal = (e) => {
        dispatch(changeParameter(e));
        dispatch(
            openModal({
                modalType: "ParameterDeleteModal",
                modalProps: { title: "Sil" },
            })
        );
    };

    useEffect(() => {
        return dispatch(fetchParameters());
    }, []);

    return (
        <div>
            <div className="site-layout-content">
                <div>
                    <Button
                        variant="outline-primary"
                        onClick={() => openParameterNewModal()}
                    >
                        Yeni Parametre Ekle
                    </Button>
                </div>

                <ListGroup variant="flush">
                    {parameters.map((item) => (
                        <ListGroup.Item key={item.id}>
                            <Container>
                                <Row xs="auto">
                                    <Col>
                                        <Person color="cornflowerblue" size={50} />
                                    </Col>
                                    <Col>
                                        <p>
                                            {item.id} - {item.parameterName}
                                        </p>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            onClick={() => openParameterEditModal(item)}
                                        >
                                            Düzenle
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => openParameterDeleteModal(item)}
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
export default ParameterList;