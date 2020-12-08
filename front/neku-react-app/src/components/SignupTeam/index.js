import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupTeam.css'

const SignupTeam = (props) => {
  return (
    <Card className="formCard border-0 p-3">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner.png?raw=true" alt="Card image cap" />
        <Form className="signupForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="signupTeamName">Nombre del Equipo</Label>
                <Input type="text" name="teamName" id="signupTeamName" placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupCapName">Nombre del Capitán</Label>
                <Input type="text" name="name" id="signupCapName" placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="signupCapLastName">Apellido del Capitán</Label>
                <Input type="text" name="lastName" id="signupCapLastName" placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupEmailTeam">Email del Capitán</Label>
                <Input type="email" name="email" id="signupEmailTeam" placeholder="> " />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="signupMembersNum">Cuántos miembros tiene el equipo?</Label>
                <Input type="number" name="lastName" id="signupMembersNum" placeholder="" />
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
                <Label for="checkmark" check>Acepto los <a href="/Terminos">terminos y condiciones</a></Label>
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

export default SignupTeam;