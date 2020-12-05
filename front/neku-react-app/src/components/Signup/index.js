import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

const Example = (props) => {
  return (
    <Card className="formCard border-0 p-3">
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="signup">Nombre</Label>
              <Input type="text" name="name" id="signupName" placeholder="> " />
            </FormGroup>
            <FormGroup>
              <Label for="signup">Alias</Label>
              <Input type="text" name="alias" id="signupAlias" placeholder="> " />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="signupEmail">Apellido</Label>
              <Input type="text" name="lastName" id="signupLastName" placeholder="> " />
            </FormGroup>
            <FormGroup>
              <Label for="signupEmail">Email</Label>
              <Input type="email" name="email" id="signupEmail" placeholder="> " />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="signupPassword" placeholder="por lo menos 8 caracteres" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Acepto los <a href="">terminos y condiciones</a></Label>
        </FormGroup>
        <Button>REGÍSTRATE</Button>
      </Form>
    </Card>
  );
}

export default Example;