import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'reactstrap';

import './RegisterChoose.css'

class RegisterChoose extends Component {
  render () {
      return (
        <Container fluid className="registerContainer">
            <Row>
                <Col>
                    <h1>Selecciona una opción y regístrate</h1>
                </Col>
            </Row>
            <Row>
                <Col className="registerButtons col-12">
                    <a href="/FormGamer">
                        <Button id="gamerButton">
                            <h3>GAMER</h3>
                        </Button>
                    </a>
                    <a href="/FormTeam">
                        <Button id="teamButton">
                            <h3>EQUIPO</h3>
                        </Button>
                    </a>
                </Col>
            </Row>
        </Container>
      )
  }
}

export default RegisterChoose;