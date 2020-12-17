import React, { Component, Fragment } from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupGamer.css'

class SignupGamer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": '',
      "fatherLastname":'',
      "motherLastname":'',
      "nickname":'',
      "email": '',
      "gamerPicture":'',
      "country":'',
      "team":''
      // "password":''
    };

    this.handleNewPostChange = this.handleNewPostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewPostChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, fatherLastname, motherLastname, nickname, email, gamerPicture, country, team } = this.state;
    const newGamer = {
      name: name,
      fatherLastname: fatherLastname,
      motherLastname: motherLastname,
      nickname: nickname,
      email:  email,
      gamerPicture: gamerPicture,
      country: country,
      team: team,
      // password: password 
    };
    // console.log(newGamer);

    fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGamer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.success){
          window.location.href="/Gamers"
        }
        // this.props.history.push("/players");
        // console.log(data)
      });
  }


  render() {
    const { name, fatherLastname, motherLastname, nickname, email, gamerPicture, country, team } = this.state;
    
    return (
    <Fragment>
      <Card className="formCard border-0 p-3">
        <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
          <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner-gamers.png?raw=true" alt="Card image cap" />
          <Form onSubmit={this.handleSubmit} className="signupForm">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="signupName">Nombre</Label>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleNewPostChange}
                    id="signupName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupFatherLastName">Apellido Paterno</Label>
                  <Input
                    type="text"
                    name="fatherLastname"
                    value={fatherLastname}
                    onChange={this.handleNewPostChange}
                    id="signupLastName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupMotherLastName">Apellido Materno</Label>
                  <Input
                    type="text"
                    name="motherLastname"
                    value={motherLastname}
                    onChange={this.handleNewPostChange}
                    id="signupMotherLastName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupAlias">Alias</Label>
                  <Input
                    type="text"
                    name="nickname"
                    value={nickname}
                    onChange={this.handleNewPostChange}
                    id="signupNickName"
                    placeholder="> " />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="signupPassword">Contraseña</Label>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleNewPostChange}
                    id="signupPassword"
                    placeholder="por lo menos 8 caracteres" />
                </FormGroup> */}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="signupTeam">Equipo</Label>
                  <Input
                    type="text"
                    name="team"
                    value={team}
                    onChange={this.handleNewPostChange}
                    id="signupTeam"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupCountry">País</Label>
                  <Input
                    type="text"
                    name="country"
                    value={country}
                    onChange={this.handleNewPostChange}
                    id="signupGamerProfile"
                    placeholder="> "  />
                </FormGroup>
                <FormGroup>
                  <Label for="signupEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleNewPostChange}
                    id="signupEmail"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupGamerPicture">Foto de Perfil</Label>
                  <Input
                    type="text"
                    name="gamerPicture"
                    value={gamerPicture}
                    onChange={this.handleNewPostChange}
                    id="signupGamerPicture" 
                    placeholder="https:// " />
                  <caption className="pt-0" id="pictureCaption">Escribir URL de la imagen. Sólo en formatos .jpg / .png y no mayor a 1000x1000px.</caption>
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
  )}
}

export default SignupGamer;