import React, { Component } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupTeam.css'

class SignupTeam extends Component (props) {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      teamCountry: '',
      teamLogo: ''
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
    const { teamName, teamCountry, teamLogo } = this.state;
    const newTeam = {
      teamName: teamName,
      teamCountry: teamCountry,
      teamLogo: teamLogo
    };
    console.log(newTeam);

    fetch("http://localhost:8080/teams/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeam),
    })
      .then((response) => response.json())
      .then(() => {
        this.props.history.push("/");
      });
  }


  render() {
    const { teamName, teamCountry, teamLogo } = this.state;
    
    return (
      <Card className="formCard border-0 p-3">
        <Col sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
          <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner-teams.png?raw=true" alt="Card image cap" />
          <Form className="signupForm">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="signupTeamName">Nombre del Equipo</Label>
                  <Input
                    type="text"
                    name="teamName"
                    value={teamName}
                    onChange={this.handleNewPostChange}
                    id="signupTeamName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupTeamCountry">País</Label>
                  <Input
                    type="text"
                    name="teamCountry"
                    value={teamCountry}
                    onChange={this.handleNewPostChange}
                    id="signupTeamCountry"
                    placeholder="> " />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label for="signupCapLastName">Logotipo del Equipo</Label>
                  <Input
                    type="text"
                    name="teamLogo"
                    value={teamLogo}
                    onChange={this.handleNewPostChange}
                    id="signupCapLastName"
                    placeholder="https:// " />
                </FormGroup>
                  <caption className="pt-0" id="pictureCaption">Escribir URL de la imagen. Sólo en formatos .jpg / .png y no mayor a 1000x1000px.</caption>
              </Col>
              <Col md={6} sm={12} id="acceptCheck">
                <FormGroup check>
                  <Input type="checkbox" name="check" id="checkmark"/>
                  <Label for="checkmark" check>Acepto los <a href="/Terminos">términos y condiciones</a></Label>
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
}

export default SignupTeam;