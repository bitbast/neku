import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'reactstrap';

import Signup from '../../components/SignupGamer'

import './Register.css'

class Registration extends Component {
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
                    <a href="">
                        <Button id="gamerButton">
                            <h3>GAMER</h3>
                        </Button>
                    </a>
                    <a href="">
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

export default Registration;