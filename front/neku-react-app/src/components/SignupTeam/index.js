import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupTeam.css'

const SignupTeam = (props) => {
  return (
    <Card className="formCard border-0 p-3">
      <Col sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner-teams.png?raw=true" alt="Card image cap" />
        <Form className="signupForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="signupTeamName">Nombre del Equipo</Label>
                <Input type="text" name="teamName" id="signupTeamName" placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupTeamCountry">País</Label>
                <Input type="text" name="teamCountry" id="signupTeamCountry" placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label for="signupCapLastName">Logotipo del Equipo</Label>
                <Input type="file" name="lastName" id="signupCapLastName" placeholder="> " />
              </FormGroup>
                <caption className="pt-0" id="pictureCaption">Sólo en formatos .jpg / .png y no mayor a 1000x1000px.</caption>
            </Col>
            <Col md={6} sm={12} id="acceptCheck">
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
  )
}

export default SignupTeam;