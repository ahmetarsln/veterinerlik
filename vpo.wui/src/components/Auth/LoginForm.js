import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, Field } from "formik";
import InputComponent from "../../libs/components/InputComponent";

import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit, reset, values, submitCount }) => {
  return (
    <div>
      <h2>VPO GİRİŞ</h2>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="username"
          id="username"
          display="Kullanıcı Adı"
          placeholder="Kullanıcı Adı"
          component={InputComponent}
        />
        <Field
          type="password"
          name="password"
          id="password"
          display="Şifre"
          placeholder="Şifre"
          component={InputComponent}
        />
        <Container>
          <Row>
            <Col>
              <Link
                to={{
                  pathname: `/register/`,
                }}
              >
                KAYIT OL
              </Link>
            </Col>
            <Col>
              <Button onClick={handleSubmit}>GİRİŞ</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};
export default LoginForm;