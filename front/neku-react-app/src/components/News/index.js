import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './News.css';

// ------------- SMALLER COMPONENTS ------------- //
import Heading from '../Heading';
import CarouselNews from '../CarouselNews';

const News = (props) => {
  return (
    <Container fluid className="news">
      <Heading />
      <Row>
        <Col>
          <CarouselNews />
        </Col>
      </Row>
    </Container>
  );
}

export default News;