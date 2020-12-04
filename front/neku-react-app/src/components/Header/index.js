import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './Header.css'

// ------------- SMALLER COMPONENTS ------------- //
import Heading from '../Heading';
import CategoryCardGroup from '../CategoryCardGroup'

const Header = (props) => {
  return (
    <Container fluid className="header">
      <Heading />
      <Row>
        <CategoryCardGroup />
      </Row>
    </Container>
  );
}

export default Header;