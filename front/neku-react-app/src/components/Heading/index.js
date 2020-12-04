import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './Heading.css';

const Heading = (props) => {
  return (
      <Row>
        <Col className="heading">
          <h1>TITULO</h1>
          <h4>Subtitulo</h4>
        </Col>
      </Row>
  );
}

export default Heading;