import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupGamer.css'

const SignupGamer = (props) => {

  const [ gamerForm, setGamerForm ] = useState({
    "name": '',
    "fatherLastName":'',
    "motherLastName":'',
    "nickname":'',
    "email": '',
    "gamerPicture":'',
    "country":'',
    "team":'',
    "password":'',
  }



  return (
  <Fragment>
    <Card className="formCard border-0 p-3">
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner-gamers.png?raw=true" alt="Card image cap" />
        <Form className="signupForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="signupName">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  id="signupName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupFatherLastName">Apellido Paterno</Label>
                <Input
                  type="text"
                  name="fatherLastName"
                  id="signupLastName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupMotherLastName">Apellido Materno</Label>
                <Input
                  type="text"
                  name="motherLastName"
                  id="signupMotherLastName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupAlias">Alias</Label>
                <Input
                  type="text"
                  name="nickname"
                  id="signupNickName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupPassword">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  id="signupPassword"
                  placeholder="por lo menos 8 caracteres" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="signupTeam">Equipo</Label>
                <Input
                  type="text"
                  name="team"
                  id="signupTeam"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupCountry">País</Label>
                <Input
                  type="text"
                  name="country"
                  id="signupGamerProfile" />
              </FormGroup>
              <FormGroup>
                <Label for="signupEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="signupEmail"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupGamerPicture">Foto de Perfil</Label>
                <Input
                  type="file"
                  name="gamerPicture"
                  id="signupGamerPicture" />
                <caption className="pt-0" id="pictureCaption">Sólo en formatos .jpg / .png y no mayor a 1000x1000px.</caption>
              </FormGroup>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center py-2">
            <Button type="submit">REGÍSTRATE</Button>
          </Row>
        </Form>
      </Col>
    </Card>
  </Fragment>
  );
}

export default SignupGamer;