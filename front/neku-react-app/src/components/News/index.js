import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './News.css';

// ------------- SMALLER COMPONENTS ------------- //
import CarouselNews from '../CarouselNews';

const News = (props) => {
  return (
    <Container fluid className="news">
      <Row>
        <Col className="heading">
          <h1>LO ÚLTIMO</h1>
          <h4>Qué está pasando en el mundo gamer?</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselNews />
        </Col>
      </Row>
    </Container>
  );
}

export default News;