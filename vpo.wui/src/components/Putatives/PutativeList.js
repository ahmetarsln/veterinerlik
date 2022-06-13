import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePutative, fetchPutatives } from "../../store/actions/putativeActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const PutativeList = () => {
    const dispatch = useDispatch();
    const putatives = useSelector((state) => state.putativeReducer.putatives);

    const selectPutative = (putative) => {
        dispatch(changePutative(putative));
    };

    const openPutativeNewModal = () => {
        dispatch(
            openModal({
                modalType: "PutativeNewModal",
                modalProps: { title: "Yeni Varsayılan" },
            })
        );
    };
    const openPutativeEditModal = (e) => {
        dispatch(changePutative(e));
        dispatch(
            openModal({
                modalType: "PutativeEditModal",
                modalProps: { title: "Düzenle" },
            })
        );
    };
    const openPutativeDeleteModal = (e) => {
        dispatch(changePutative(e));
        dispatch(
            openModal({
                modalType: "PutativeDeleteModal",
                modalProps: { title: "Sil" },
            })
        );
    };

    useEffect(() => {
        return dispatch(fetchPutatives());
    }, []);

    return (
        <div>
            <div className="site-layout-content">
                <div>
                    <Button
                        variant="outline-primary"
                        onClick={() => openPutativeNewModal()}
                    >
                        Yeni Varsayılan Ekle
                    </Button>
                </div>

                <ListGroup variant="flush">
                    {putatives.map((item) => (
                        <ListGroup.Item key={item.id}>
                            <Container>
                                <Row xs="auto">
                                    <Col>
                                        <Person color="cornflowerblue" size={50} />
                                    </Col>
                                    <Col>
                                        <p>
                                            {item.id} - {item.putativeName}
                                        </p>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            onClick={() => openPutativeEditModal(item)}
                                        >
                                            Düzenle
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => openPutativeDeleteModal(item)}
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
export default PutativeList;