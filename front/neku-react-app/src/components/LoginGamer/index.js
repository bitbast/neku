import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './loginGamer.css'

const loginGamer = (props) => {
  return (
    <Card className="formCard border-0 p-3">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner.png?raw=true" alt="Card image cap" />
        <Form className="loginForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="loginName">Nombre</Label>
                <Input type="text" name="name" id="loginName" placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={6} sm={6}>
              <FormGroup>
                <Label for="loginPassword">Contraseña</Label>
                <Input type="password" name="password" id="loginPassword" placeholder="por lo menos 8 caracteres" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center py-2">
            <Button>REGÍSTRATE</Button>
          </Row>
        </Form>
      </Col>
    </Card>
  );
}

export default loginGamer;