import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupGamer.css'

const SignupGamer = (props) => {
  return (
    <Card className="formCard border-0 p-3">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner.png?raw=true" alt="Card image cap" />
        <Form className="signupForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="signupName">Nombre</Label>
                <Input type="text" name="name" id="signupName" placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupAlias">Alias</Label>
                <Input type="text" name="alias" id="signupAlias" placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="signupLastName">Apellido</Label>
                <Input type="text" name="lastName" id="signupLastName" placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupEmail">Email</Label>
                <Input type="email" name="email" id="signupEmail" placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={6} sm={6}>
              <FormGroup>
                <Label for="signupPassword">Contraseña</Label>
                <Input type="password" name="password" id="signupPassword" placeholder="por lo menos 8 caracteres" />
              </FormGroup>
            </Col>
            <Col md={6} sm={6} id="acceptCheck">
              <FormGroup check>
                <Input type="checkbox" name="check" id="checkmark"/>
                <Label for="checkmark" check>Acepto los <a href="">terminos y condiciones</a></Label>
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

export default SignupGamer;