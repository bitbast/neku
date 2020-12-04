import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './News.css';

// ------------- SMALLER COMPONENTS ------------- //
import Heading from '../Heading';
import Carousel from '../Carousel';

const News = (props) => {
  return (
    <Container fluid className="news">
      <Heading />
      <Row>
        <Col>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
}

export default News;