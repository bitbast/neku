import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './Header.css'

// ------------- SMALLER COMPONENTS ------------- //
import CategoryCardGroup from '../CategoryCardGroup'

const Header = (props) => {
  return (
    <Container fluid className="header">
      <Row>
        <Col className="heading">
          <h1>BIENVENIDO</h1>
          <h4>Are. You. Ready?</h4>
        </Col>
      </Row>
      <Row>
        <CategoryCardGroup />
      </Row>
    </Container>
  );
}

export default Header;