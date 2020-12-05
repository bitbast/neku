import React from 'react';

import { Button } from 'reactstrap';

import Signup from '../../components/SignupGamer'

import './Register.css'

class Form extends Component {
  render () {
      return (
          <Container fluid className="registerContainer">
            <h1>Selecciona una opción y regístrate</h1>
            <Button size="lg">
                REGíSTRATE COMO GAMER
            </Button>
            <Button size="lg">
                REGISTRA A TU EQUIPO
            </Button>
          </Container>
      )
  }
}

export default Form;