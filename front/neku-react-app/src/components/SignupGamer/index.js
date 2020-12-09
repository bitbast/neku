import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupGamer.css'

const SignupGamer = (props) => {

  // const [register, setRegister] = useState({
  //   name: '',
  //   fatherLastName: '',
  //   motherLastName: '',
  //   nickName: '',
  //   email: '',
  //   teamName: '',
  //   tournamentsPlayed: '',
  //   gamesPlayed: '',
  //   gamerProfile: '',
  //   gamerPicture: '',
  //   password: '',
  // });

  return (
  <Fragment>
    <Card className="formCard border-0 p-3">
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
        <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner.png?raw=true" alt="Card image cap" />
        <Form className="signupForm">
          <Row form>
            <Col md={4}>
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
                  name="nickName"
                  id="signupNickName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="signupEmail"
                  placeholder="> " />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="signupTeamName">Equipo</Label>
                <Input
                  type="text"
                  name="teamName"
                  id="signupTeamName"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupTournamentsPlayed">Torneos</Label>
                <Input
                  type="number"
                  name="tournamentsPlayed"
                  id="signupTournamentsPlayed"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupGamesPlayed">Juego</Label>
                <Input
                  type="text"
                  name="gamesPlayed"
                  id="signupGamesPlayed"
                  placeholder="> " />
              </FormGroup>
              <FormGroup>
                <Label for="signupGamerProfile">Bio</Label>
                <Input
                  type="textarea"
                  name="gamerProfile"
                  id="signupGamerProfile"
                  placeholder="Cuéntanos algo de ti" />
              </FormGroup>
            </Col>
            <Col md={4} sm={6}>
              <FormGroup>
                <Label for="signupPassword">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  id="signupPassword"
                  placeholder="por lo menos 8 caracteres" />
              </FormGroup>
              <FormGroup>
                <Label for="signupGamerPicture">Foto de Perfil</Label>
                <Input
                  type="file"
                  name="gamerPicture"
                  id="signupGamerPicture" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check className="mt-1 mb-4">
                <Input
                type="checkbox"
                name="check"
                id="checkmark"/>
                <Label for="checkmark" check>Acepto los <a href="/Aviso">términos y condiciones</a></Label>
              </FormGroup>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center py-2">
            <Button>REGÍSTRATE</Button>
          </Row>
        </Form>
      </Col>
    </Card>
  </Fragment>
  );
}

export default SignupGamer;