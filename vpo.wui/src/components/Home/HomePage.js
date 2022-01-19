import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";

const HomePage = () => (
  <>
    <Container>
      <Row>
        <Col md={12}>
          <h1>Veteriner Poliklinik Otomasyonu</h1>
          <Alert variant="success">
            <Alert.Heading>Hoşgeldiniz</Alert.Heading>
            <p>
              Ana sayfa içeriği
            </p>
            <hr />
            <p className="mb-0">
            Ana sayfa içeriği2
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
